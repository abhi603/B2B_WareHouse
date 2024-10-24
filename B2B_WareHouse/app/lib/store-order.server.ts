import type {Invoice, Order, PaymentMethod, User} from '@prisma/client'
import {OrderStatus} from '@prisma/client'
import type {SupplierCartItem} from '~/context/SupplierCartContext'
import {db} from '~/db.server'

export function getStoreOrders(userId: User['id']) {
	return db.sale.findMany({
		where: {
			userId,
		},
		orderBy: {
			createdAt: 'desc',
		},
		include: {
			user: true,
			invoice: true,
			items: {
				include: {
					item: true,
				},
			},
		},
	})
}

export async function createStoreOrder({
	userId,
	items,
	amount,
	paymentMethod,
}: {
	userId: User['id']
	items: Array<SupplierCartItem>
	amount: Invoice['amount']
	paymentMethod: PaymentMethod
}) {
	return await db.$transaction(async tx => {
		return tx.sale.create({
			data: {
				userId,
				status: OrderStatus.SUCCESS,
				items: {
					createMany: {
						data: items.map(item => ({
							itemId: item.id,
							quantity: item.quantity,
						})),
					},
				},
				invoice: {
					create: {
						amount,
						totalAmount: amount,
						paymentMethod,
					},
				},
			},
		})
	})
}

export async function cancelStoreOrder(orderId: Order['id']) {
	const order = await db.sale.findUnique({
		where: {
			id: orderId,
		},
		include: {
			items: {
				include: {
					item: true,
				},
			},
		},
	})

	if (!order) {
		throw new Error('Order not found')
	}

	return db.sale.update({
		where: {
			id: orderId,
		},
		data: {
			status: OrderStatus.CANCELLED,
		},
	})
}

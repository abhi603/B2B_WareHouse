import {faker} from '@faker-js/faker'
import {PrismaClient, Role} from '@prisma/client'
import * as bcrypt from 'bcryptjs'
import {ObjectId} from 'bson'
import slugify from 'slugify'
import {createPasswordHash} from '~/utils/misc'
import {supplierSeedData} from './data'

const db = new PrismaClient()

async function seed() {
	await db.item.deleteMany()
	await db.supplier.deleteMany()
	await db.user.deleteMany()
	await db.inventory.deleteMany()
	await db.inventoryItem.deleteMany()
	await db.saleInvoice.deleteMany()
	await db.sale.deleteMany()
	await db.inventoryItemSale.deleteMany()
	await db.order.deleteMany()

	const admin = await db.user.create({
		data: {
			firstName: faker.name.firstName(),
			lastName: faker.name.lastName(),
			email: 'admin@app.com',
			passwordHash: await createPasswordHash('password'),
			role: Role.ADMIN,
		},
	})

	const inventory = await db.inventory.create({
		data: {
			name: 'Main Inventory',
			slug: 'main-inventory',
			image:
				'https://images.unsplash.com/photo-1615822461480-f303cdb9cad8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
		},
	})

	await db.user.upsert({
		where: {
			email: 'inventory@app.com',
		},
		update: {},
		create: {
			firstName: faker.name.firstName(),
			lastName: faker.name.lastName(),
			email: 'inventory@app.com',
			passwordHash: await bcrypt.hash('password', 12),
			inventoryId: inventory.id,
		},
	})

	const supplierId = new ObjectId().toString()
	await db.user.create({
		data: {
			id: supplierId,
			firstName: faker.name.firstName(),
			lastName: faker.name.lastName(),
			email: 'supplier@app.com',
			passwordHash: await createPasswordHash('password'),
			role: Role.STAFF,
			inventoryId: inventory.id,
		},
	})

	await db.user.create({
		data: {
			firstName: faker.name.firstName(),
			lastName: faker.name.lastName(),
			email: 'store@app.com',
			passwordHash: await createPasswordHash('password'),
			role: Role.STORE_MANAGER,
		},
	})

	for (const supplier of supplierSeedData) {
		await db.supplier.create({
			data: {
				id: supplierId,
				image: supplier.image,
				name: supplier.name,
				slug: slugify(supplier.name, {lower: true, strict: true}),
				items: {
					createMany: {
						data: supplier.items.map(item => ({
							...item,
							quantity: 100,
							slug: slugify(item.name, {lower: true, strict: true}),
						})),
					},
				},
			},
		})
	}

	console.log(`Database has been seeded. 🌱`)
}

seed()
	.catch(e => {
		console.error(e)
		process.exit(1)
	})
	.finally(async () => {
		await db.$disconnect()
	})

import {faker} from '@faker-js/faker'

export const supplierSeedData = [
	{
		name: 'Clothing Store',
		image:
			'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
		items: [
			{
				name: 'Shirt',
				description:
					'A shirt is a cloth garment for the upper body (from the neck to the waist).',
				image:
					'https://images.unsplash.com/photo-1567696911980-2eed69a46042?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
				price: Number(faker.finance.amount(5, 50, 2)),
			},
		],
	},
]

export const inventorySeedData = [
	{
		name: 'Main Inventory',
		slug: 'main-inventory',
		image:
			'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
	},
]

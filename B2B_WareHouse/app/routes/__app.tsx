import {ArrowLeftOnRectangleIcon} from '@heroicons/react/24/solid'

import {ShoppingBagIcon} from '@heroicons/react/24/outline'

import {
	Anchor,
	Avatar,
	Button,
	Divider,
	Footer,
	Menu,
	ScrollArea,
} from '@mantine/core'
import type {LoaderArgs, SerializeFrom} from '@remix-run/node'
import {json, redirect} from '@remix-run/node'
import {Form, Link, Outlet} from '@remix-run/react'
import {TailwindContainer} from '~/components/TailwindContainer'
import {getAllSuppliers} from '~/lib/supplier.server'
import {isAdmin, isStaff, isStoreManager, requireUserId} from '~/session.server'
import {useUser} from '~/utils/hooks'

export type AppLoaderData = SerializeFrom<typeof loader>
export const loader = async ({request}: LoaderArgs) => {
	await requireUserId(request)

	if (await isStaff(request)) {
		return redirect('/staff')
	}

	if (await isStoreManager(request)) {
		return redirect('/store')
	}

	if (await isAdmin(request)) {
		return redirect('/admin')
	}

	const suppliers = await getAllSuppliers()
	const items = suppliers.reduce((acc, supplier) => {
		supplier.items.forEach(item => acc.push(item))
		return acc
	}, [] as typeof suppliers[number]['items'])

	return json({inventories: suppliers, items})
}

export default function AppLayout() {
	return (
		<>
			<div className="flex h-full flex-col">
				<HeaderComponent />
				<ScrollArea classNames={{root: 'flex-1 bg-gray-50'}}>
					<main>
						<Outlet />
					</main>
				</ScrollArea>

				<FooterComponent />
			</div>
		</>
	)
}

function HeaderComponent() {
	const {user} = useUser()

	return (
		<>
			<Form replace action="/api/auth/logout" method="post" id="logout-form" />
			<header className="flex h-16 items-center border-b border-b-gray-300 py-2">
				<TailwindContainer className="w-full px-10">
					<div className="flex h-full w-full items-center justify-between">
						<div className="flex flex-shrink-0 items-center gap-4">
							<Anchor component={Link} to="/">
								<div className="flex h-10 items-center">
									<p className="flex items-center text-2xl font-bold text-black">
										<span>IMS.</span>
										<span className="ml-1.5 text-sm font-medium">
											(INVENTORY)
										</span>
									</p>
								</div>
							</Anchor>
						</div>

						<div className="flex items-center gap-4">
							<Button
								component={Link}
								to="/cart"
								title="Cart"
								variant="subtle"
								compact
							>
								View Quote
							</Button>

							<Menu
								position="bottom-start"
								withArrow
								transition="pop-top-right"
							>
								<Menu.Target>
									<button>
										<Avatar color="blue" size="md">
											{user.firstName.charAt(0)}
											{user.lastName.charAt(0)}
										</Avatar>
									</button>
								</Menu.Target>

								<Menu.Dropdown>
									<Menu.Item disabled>
										<p className="mt-0.5 text-sm">{user.inventory?.name}</p>
									</Menu.Item>

									<Divider />

									<Menu.Item disabled>
										<div className="flex flex-col">
											<p>
												{user.firstName} {user.lastName}{' '}
											</p>
											<p className="mt-0.5 text-sm">{user.email}</p>
										</div>
									</Menu.Item>

									<Divider />

									<Menu.Item
										icon={<ShoppingBagIcon className="w- h-4 text-gray-700" />}
										component={Link}
										to="/order-history"
									>
										Your orders
									</Menu.Item>
									<Menu.Item
										icon={
											<ArrowLeftOnRectangleIcon className="h-4 w-4 text-gray-700" />
										}
										type="submit"
										form="logout-form"
									>
										Logout
									</Menu.Item>
								</Menu.Dropdown>
							</Menu>
						</div>
					</div>
				</TailwindContainer>
			</header>
		</>
	)
}

function FooterComponent() {
	return (
		<Footer height={1} className="flex items-center justify-center text-center">
			<span></span>
		</Footer>
	)
}

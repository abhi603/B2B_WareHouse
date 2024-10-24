import {Anchor} from '@mantine/core'
import {Link} from '@remix-run/react'
import appConfig from 'appConfig'
import {TailwindContainer} from '~/components/TailwindContainer'
import {useAppData} from '~/utils/hooks'

export default function Dashboard() {
	return (
		<div className="flex flex-col gap-4">
			<SuppliersList />
		</div>
	)
}

function SuppliersList() {
	const {inventories: suppliers} = useAppData()

	return (
		<div className="">
			<TailwindContainer>
				<div className="py-16 sm:py-20">
					<div className="md:flex md:items-center md:justify-between">
						<h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
							Suppliers
						</h2>
						<Anchor
							component={Link}
							to="suppliers"
							prefetch="intent"
							className="hidden md:block"
						>
							Browse all suppliers<span aria-hidden="true"> &rarr;</span>
						</Anchor>
					</div>

					<div className="mt-12 grid grid-cols-1 gap-x-4 gap-y-10 sm:grid-cols-4 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:grid-cols-6 lg:gap-x-8">
						{suppliers.map((supplier, index) => {
							if (index >= appConfig.cardsLimit) {
								return null
							}

							return (
								<div
									key={supplier.id}
									className="group relative mx-auto sm:mx-[unset]"
								>
									<div className="overflow-hidden rounded-md bg-gray-200 shadow transition-all">
										<Link
											to={`/suppliers/${supplier.slug}`}
											prefetch="intent"
											className="overflow-hidden rounded-lg bg-gray-200"
										>
											<img
												src={supplier.image}
												alt={supplier.name}
												className="aspect-square w-full object-cover object-center transition-all group-hover:scale-105"
											/>
										</Link>
									</div>

									<h3 className="mt-4 text-sm text-gray-700">
										<Anchor
											to={`/suppliers/${supplier.slug}`}
											prefetch="intent"
											component={Link}
										>
											{supplier.name}
										</Anchor>
									</h3>
								</div>
							)
						})}
					</div>

					<div className="mt-8 md:hidden">
						<Anchor component={Link} to="suppliers" prefetch="intent" size="sm">
							Browse all suppliers<span aria-hidden="true"> &rarr;</span>
						</Anchor>
					</div>
				</div>
			</TailwindContainer>
		</div>
	)
}

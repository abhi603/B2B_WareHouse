# B2B_WareHouse
The B2B Warehouse Management System (WMS) is designed to streamline the process of warehouse inventory management, supplier interactions, and business purchases. This system aims to create a centralized platform to manage warehouse operations, enhance supplier communication, and facilitate business transactions.

The platform caters to four distinct user categories with unique requirements: Businesses, Warehouse Operators, Suppliers, and Admin.

1.	Businesses are the primary consumers in this ecosystem. They need to purchase goods from the warehouse, have visibility of the available inventory, and keep track of their purchase history. Each business is identified by a unique ID and is characterized by its name, email, and password.

2.	Inventory are responsible for managing the warehouse inventory and logistic operations. They need to monitor inventory levels, send quotations to suppliers for approval, and coordinate the logistics. Each warehouse operator is linked to a specific warehouse, and they have attributes such as name, email, and password.

3.	Suppliers play a crucial role in this system by supplying the goods to the warehouse. They approve or reject the quotations sent by the warehouse operators and manage their product offerings. Each supplier has attributes such as name, email, and password. 

4.	Admin users have the responsibility of overseeing the entire operation and managing the suppliers and businesses. They are characterized by their name, email, and password.

Inventory Management: The WMS facilitates tracking and managing inventory levels effectively. The warehouse operator maintains a record of all products in the warehouse, including the name, quantity, and associated warehouse ID. When the inventory level falls below a desired threshold, the warehouse operator sends a quotation to the supplier, indicating the need for a refill. 

Supplier Communication and Management: The WMS ensures efficient communication and management of suppliers. The warehouse operator sends a quotation to the supplier with a quoted price for each item, which the supplier can approve or reject. Once approved, the supplier adds the products to the warehouse inventory, with each product carrying details such as name, description, price, quantity, and image.

On the purchasing side, businesses can place orders to the warehouse. Each sale contains details like the name, description, total price, image, and the associated business and warehouse IDs. Each purchased product carries details such as name, description, price, quantity, and image.

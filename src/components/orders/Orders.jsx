function Orders() {
    return (
        <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold mb-4 pb-2 border-b border-gray-300">
                Your Personal Order History
            </h1>
            <ul className="space-y-3">
                <li className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                    <span className="font-medium">Item 1:</span> Description or details
                </li>
                <li className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                    <span className="font-medium">Item 2:</span> Description or details
                </li>
                <li className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                    <span className="font-medium">Item 3:</span> Description or details
                </li>
                <li className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                    <span className="font-medium">Item 4:</span> Description or details
                </li>
                <li className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                    <span className="font-medium">Item 5:</span> Description or details
                </li>
            </ul>
        </div>
    );
}

export default Orders;

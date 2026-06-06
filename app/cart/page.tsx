export default function CartPage() {
  return (
    <main className="min-h-screen bg-black text-white p-8">

      <h1 className="text-5xl font-bold text-center mb-12">
        Shopping Cart
      </h1>

      <div className="max-w-3xl mx-auto bg-zinc-900 p-8 rounded-xl">

        <h2 className="text-2xl font-bold mb-4">
          Smart Watch
        </h2>

        <p className="text-gray-400 mb-4">
          Quantity: 1
        </p>

        <p className="text-xl font-semibold mb-6">
          ₹4,999
        </p>

        <a
  href="/checkout"
  className="inline-block bg-green-600 px-6 py-3 rounded-lg hover:bg-green-500 transition-all"
>
  Proceed to Checkout
</a>

      </div>

    </main>
  );
}
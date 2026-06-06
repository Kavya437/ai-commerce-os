export default function CheckoutPage() {
  return (
    <main className="min-h-screen bg-black text-white p-8">

      <div className="max-w-3xl mx-auto">

        <h1 className="text-5xl font-bold text-center mb-12">
          Checkout
        </h1>

        <div className="bg-zinc-900 p-8 rounded-xl">

          <div className="mb-6">
            <label className="block mb-2">
              Full Name
            </label>

            <input
              type="text"
              className="w-full p-3 rounded-lg bg-zinc-800"
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2">
              Email
            </label>

            <input
              type="email"
              className="w-full p-3 rounded-lg bg-zinc-800"
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2">
              Address
            </label>

            <textarea
              className="w-full p-3 rounded-lg bg-zinc-800"
            />
          </div>

          <button className="bg-green-600 px-6 py-3 rounded-lg hover:bg-green-500 transition-all">
            Complete Payment
          </button>

        </div>

      </div>

    </main>
  );
}
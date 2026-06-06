import Image from "next/image";
export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
        <div className="flex justify-between mb-8">
  <a href="/" className="text-blue-400">
    ← Home
  </a>

  <a href="/cart" className="text-blue-400">
    Cart →
  </a>
</div>

      <h1 className="text-5xl font-bold text-center mb-12">
        Products
      </h1>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

        <div className="bg-zinc-900 p-6 rounded-xl hover:-translate-y-2 hover:border-blue-500 border border-zinc-800 transition-all duration-300">
          <span className="bg-green-600 px-3 py-1 rounded-full text-sm">
  Best Seller
</span>
          <h2 className="text-2xl font-bold mb-3">
            Smart Watch
          </h2>
          <Image
  src="/products/watch.jpg"
  alt="Smart Watch"
  width={250}
  height={180}
  className="rounded-lg mb-4"
/>
        <p className="text-yellow-400 mb-2">
  ★★★★★ (4.8)
</p>

          <p className="text-gray-400 mb-4">
            AI-powered wearable device.
          </p>
          

          <p className="text-xl font-semibold">
            ₹4,999
          </p>
          <button className="mt-4 bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-500 transition-all">
            Add to Cart
        </button>
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl hover:-translate-y-2 hover:border-blue-500 border border-zinc-800 transition-all duration-300">
          <h2 className="text-2xl font-bold mb-3">
            Wireless Earbuds
          </h2>
          <Image
  src="/products/earbuds.jpg"
  alt="Wireless Earbuds"
  width={250}
  height={180}
  className="rounded-lg mb-4"
/>
        <p className="text-yellow-400 mb-2">
  ★★★★★ (4.8)
</p>
          <p className="text-gray-400 mb-4">
            Premium sound experience.
          </p>
          

          <p className="text-xl font-semibold">
            ₹2,999
          </p>
          <button className="mt-4 bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-500 transition-all">
  Add to Cart
</button>
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl hover:-translate-y-2 hover:border-blue-500 border border-zinc-800 transition-all duration-300">
          <h2 className="text-2xl font-bold mb-3">
            Gaming Mouse
          </h2>
          <Image
  src="/products/mouse.jpg"
  alt="Gaming Mouse"
  width={250}
  height={180}
  className="rounded-lg mb-4"
/>
        <p className="text-yellow-400 mb-2">
  ★★★★★ (4.8)
</p>

          <p className="text-gray-400 mb-4">
            High precision gaming mouse.
          </p>
         

          <p className="text-xl font-semibold">
            ₹1,999
          </p>
          <button className="mt-4 bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-500 transition-all">
  Add to Cart
</button>
        </div>

      </div>

    </main>
  );
}
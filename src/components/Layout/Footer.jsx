function Footer() {
  return (
    <footer className="mt-4 bg-blue-950 text-white p-8 flex justify-between items-center font-bold text-xl">
      <div>&copy; {new Date().getFullYear()} . تمامی حقوق محفوظ است</div>
      <div className="flex gap-6">
        <a href="/about" className="hover:text-yellow-500">
          درباره ما
        </a>
        <a href="/contact" className="hover:text-yellow-500">
          تماس با ما
        </a>
        <a href="/privacy" className="hover:text-yellow-500">
          سیاست حفظ حریم خصوصی
        </a>
      </div>
    </footer>
  )
}

export default Footer

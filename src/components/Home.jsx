function Home() {
  return (
    <section className="bg-white dark:bg-gray-900">
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <h1 className="mb-4 text-2xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Hello! I am Varun
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
            I am a Web Developer from India!
        </p>
        
        {/* Centered Image */}
        <div className="flex justify-center">
            <img className="rounded-full w-96 h-96 mx-auto" src="/IMG_20230420_001422_789.jpg" alt="Varun's photo" />
        </div>

        <blockquote>
            <p className="text-2xl italic font-medium text-gray-900 dark:text-white">`No one comes to your website to be entertained. They have questions they think you can answer. Content answers questions.`</p>
        </blockquote>
    </div>
</section>


  )
}

export default Home

import Header from '../components/header'
import About from '../components/community/About'
import PostForm from '../components/new/PostForm'

const New = () => {
  return (
    <div className="flex min-h-screen flex-col bg-black text-[#D7DADC]">
    <Header />
      <main className="mx-auto mt-16 flex w-full max-w-5xl flex-1 space-x-6 py-5 px-6">
      <div className="w-full lg:w-2/3">
      <PostForm />
      </div>
      <div className="hidden w-1/3 lg:block">
    <About />
      </div>
      </main>
    </div>
  )
}

export default New
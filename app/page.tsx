import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Welcome to my Personal Portfolio!
      </h1>
      <p className="mb-4">
        {`I’m Steven, a fourth-year student Computer Engineering student at Stony Brook University. With a diverse set of interests spanning across software, engineering, product management, consulting, data science, and ML/AI, I am constantly driven by the pursuit of personal growth and enrichment.`}<br /><br />
        {`Recently, I have found myself drawn to the healthcare space, as the community it represents displays a sense of mission and genuine compassion towards humanity. I am committed to doing meaningful work with people, for people.`}<br /><br />
        {`I draw inspiration from the energy and dedication of those around me, and am always eager to apply skills learned from the classroom in a practical setting. I am passionate about contributing to projects that create meaningful social impact, translating to my current role in biomedical informatics research.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}

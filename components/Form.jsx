import Link from "next/link"

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type} Post</span>
      </h1>
      <p className="desc tex-left max-w-md">
       {type} incredible efficiency, share them
        with the world, and use any AI-powered platform to
        let your creativity run free.
      </p>

      <form
          onSubmit={handleSubmit} 
          className="mt-10 w-full max-w-2xl flex flex-col gap-7
          glassmorphism"
       >
            <label>
                <span className="font-satoshi font-semibold text-base text-gray-700">
                  Your AI Askket 
                </span>
                
                <textarea
                  value={post.askket}
                  onChange={(e) => setPost({ ...post, 
                  askket: e.target.value})}
                  placeholder="Ask your AI Askket here......"
                  required
                  className="form_textarea"
                />
                        
            </label>   
            <label>
                <span className="font-satoshi font-semibold
                text-base text-gray-700">
                  Tag {` `}
                <span className="font-normal">(#news, #sport, #product, #webdevelopment, #idea,.....)</span>
                </span> 
                
                <input
                  value={post.tag}
                  onChange={(e) => setPost({ ...post,
                  tag: e.target.value})}
                  placeholder="#Tag"
                  type="text"
                  required
                  className="form_input"
                 />   
                </label>

                <div className="flex-end mx-3 mb-5 gap-4">
                  <Link href="/" className="text-gray-500 text-sm">
                    Cancel 
                  </Link>
                <button 
                type="submit"
                disabled={submitting}
                className="px-5 py-1.5 text-sm 
                bg-primary-orange rounded-full text-white"
                >
                  {submitting ? `${type}...` : type}
                </button>
               </div>
            </form>    
          </section> 
  );
};
 
export default Form
import React from "react"
import { commentData, FileNode } from "./constants/data"

/*
Function to reply Comment
- Show Hidden Input Box
- to the node of the Child
*/
const replyComment = (event: any) => {

    //console.log("Test "+event)
    //console.table(commentData['children']?.push())
    
    return (event : React.MouseEvent) =>  (
    event.preventDefault()
  )
}


/*
recursively renders each parent and child comments
*/
function Comments({comment} : {comment: FileNode})   {
  const nestedComments = (comment.children || []).map(comment => {
    return ( <Comments comment={comment} /> )
  })
  
  return (
    <div className="comment-thread">  
      <details open className="comment" id="comment-1">
        <a href="#comment-1" className="comment-border-link">
              <span className="sr-only">Jump</span>
          </a>
          <summary>
            <div className="comment-heading">
                <div className="comment-voting">
                    <button type="button">
                        <span aria-hidden="true">&#9650;</span>
                        <span className="sr-only">Vote up</span>
                    </button>
                    <button type="button">
                        <span aria-hidden="true">&#9660;</span>
                        <span className="sr-only">Vote down</span>
                    </button>
                </div>
                <div className="comment-info">
                    <a href="#" className="comment-author">{comment.author}</a>
                    <p className="m-0">
                      {comment.id} &bull; days ago
                    </p>
                </div>
            </div>
        </summary>
        <div className="comment-body">
            <p>{comment.text}</p>
            <span></span>
            <button data-id={comment.id} onClick={replyComment}>Reply</button>
        </div>
        {nestedComments}
      </details>
      
    </div>
  )
}


/*
final App component that is exported from the file
*/
function App() {
  
  return (
    <div>
      <Comments comment={commentData}  />
    </div>
  )
}

export default App
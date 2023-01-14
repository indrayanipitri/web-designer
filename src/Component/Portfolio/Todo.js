import React from 'react'
import '../../Style/Portfolio.css'
import ImgTodo from '../../assets/todo.png'

export default function Todo() {
  return (
        <div className='container-projects'>
        <h2>App ToDo List</h2>
            <div className="text-projects">
                <div className="subtitle-text">
                    <p>App todo yang dibuat simple dengan fungsionalitas sebutuhnya. Perpaduan warna hitam biru dan kuning membuatnya terlihat okay. Disimpan di local storage.</p>
                    <a href="https://todo-list-pit.netlify.app/" target="_blank" rel="noreferrer"><button>Lihat Web</button></a>
                    
                </div>
                <div className="properties-text">
                    <h4>Tool Design :</h4>
                    <p>Figma</p>
                    <h4 className='font-text'>Font :</h4>
                    <p>Poppins</p>
                </div>
                
            </div>
            <p className='tech-stack'>Tech Stack: ReactJs, CSS, Bootstrap.</p>
        <div className="img-portfolio">
            <img src={ImgTodo} alt="todo" />
        </div>
        </div>
    
  )
}

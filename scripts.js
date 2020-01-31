const modal = document.querySelector('.modal-overlay')
const courses = document.querySelectorAll('.course')



for(let course of courses){
    course.addEventListener("click", function(){
        const cursoId = course.getAttribute("id")
        console.log(cursoId)
        modal.classList.add('active')
        modal.querySelector("iframe").src = `https://rocketseat.com.br/${cursoId}`
    })
}

document.querySelector('.close-modal').addEventListener('click', function(){
    modal.querySelector("iframe").src = ''
    modal.classList.remove('active')
})

document.querySelector('.maximize-modal').addEventListener('click', function(){
    const isMax = modal.querySelector('.modal').classList.contains('maximize')
    if(!isMax) {
        modal.querySelector('.modal').classList.add('maximize')
    }else{
        modal.querySelector('.modal').classList.remove('maximize')
    }
})
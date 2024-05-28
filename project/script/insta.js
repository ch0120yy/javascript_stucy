// like(a) 클릭 시 like_off.png -> like_on.png 변경
const like = document.querySelector('.like')
const comments = document.querySelector('.comments')
const paper = document.querySelector('.paper')
console.log(like)
console.log(like.children[0])
console.log(like.children[0].src)
const like_func = () => {
    like.children[0].src="./images/like_on.png"
}
const comments_func = () => {
    comments.children[0].src="./images/comment_on.png"
}
const paper_func = () => {
    paper.children[0].src="./images/paper_on.png"
}
like.addEventListener('click',like_func)
comments.addEventListener('click',comments_func)
paper.addEventListener('click',paper_func)
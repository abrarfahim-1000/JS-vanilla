// book class
class book{
    constructor(title, author, isbn){
        this.title = title
        this.author = author
        this.isbn = isbn
    }
}

// ui class
class ui{
    static addbooktolist(book){
        const list=document.querySelector('#book-list')
        const row=document.createElement('tr')
        row.innerHTML=`<td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>`

        list.appendChild(row)
    }

    static displaybooks(){
            const books = store.getbooks()
            books.forEach((book)=> ui.addbooktolist(book))
        }

    static deletebook(el){
        if(el.classList.contains('delete')){
            el.parentElement.parentElement.remove()
        }
    }

    static showalert(message,className){
        const div=document.createElement('div')
        div.className=`alert alert-${className}`
        div.appendChild(document.createTextNode(message))
        const container=document.querySelector('.container')
        const form=document.querySelector('#book-form')
        container.insertBefore(div,form)
        // vanish in 3 seconds
        setTimeout(()=>document.querySelector('.alert').remove(),3000)
    }

    static clearfield(){
        document.querySelector('#title').value=''
        document.querySelector('#author').value=''
        document.querySelector('#isbn').value=''
    }
}

// store class
class store {
    static getbooks(){
        let books
        if(localStorage.getItem('books')===null){
            books=[]
        } else {
            books=JSON.parse(localStorage.getItem('books'))
        }
        return books
    }

    static addbook(book){
        const books=store.getbooks()
        books.push(book)
        localStorage.setItem('books',JSON.stringify(books))
    }

    static removebook(isbn){
        const books=store.getbooks()
        books.forEach((bk,index)=>{
            if(bk.isbn===isbn){
                books.splice(index,1)
            }
        })
        localStorage.setItem('books',JSON.stringify(books))
    }

}

// display book
document.addEventListener('DOMContentLoaded', ui.displaybooks)

// add book
document.querySelector('#book-form').addEventListener('submit',(e)=>{
    // prevent actual submit
    e.preventDefault()
    
    // getting form values
    const title=document.querySelector('#title').value
    const author=document.querySelector('#author').value
    const isbn=document.querySelector('#isbn').value

    // validate
    if(title==='' || author==='' || isbn===''){
        ui.showalert('please fill in all fields','danger')
    } else {
        // instantiate book
    const Book=new book(title, author, isbn)

    // add book to store
    store.addbook(Book)
    
    // add book to ui
    ui.addbooktolist(Book)

    ui.showalert('book added','success')

    ui.clearfield()
    }
})

// delete book

document.querySelector('#book-list').addEventListener('click',(e)=>{
    // console.log(e.target)
    ui.deletebook(e.target)
    store.removebook(e.target.parentElement.previousElementSibling.textContent)
    

    ui.showalert('book removed','info')
    }
)
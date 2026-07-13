const h2 = document.querySelectorAll('.Accard-Menu>li>h2')
const p = document.querySelectorAll('.Accard-Menu>li>p')

p.forEach((val)=>{
    val.setAttribute('data-h', val.clientHeight)
    val.setAttribute('data-status', 'off')
    val.style.height='0px'
})

h2.forEach((val, i)=>{
    val.addEventListener('click', ()=>{
        p.forEach((item, index)=>{
            if( i!=index){
                item.style.height='0px'
                item.dataset.status='off'
            }
        })

        if(val.nextElementSibling.getAttribute('data-status')=== 'off'){
            val.nextElementSibling.style.height=val.nextElementSibling.getAttribute('data-h')+'px'
            val.nextElementSibling.dataset.status='on'
        }else{
            val.nextElementSibling.style.height='0px'
            val.nextElementSibling.dataset.status='off'
        }
    })
})
document.addEventListener('DOMContentLoaded', () => {

    const followCursor = () => {
        const el = document.getElementById('cursor')

        window.addEventListener('mousemove', e => {
            const target = e.target
            if (!target) return

            if (target.closest('a')) {
                el.classList.add('active')
            } else {
                el.classList.remove('active')
            }

            el.style.left = e.pageX + 'px'
            el.style.top = e.pageY + 'px'
        })
    }

    followCursor()

})
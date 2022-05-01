import React from 'react'

const Footer = () => {
    return (
        <footer class="docs-footer white-bg">
            <p class="sm-p mg-t-15">Made with 💖 by Shivani</p>
            <div class="flex-row mg-t-10">
                <a target="_blank" rel="noreferrer" href="https://twitter.com/Shivani07517015">
                    <button class="btn icon-btn center-items">
                        <i class="fa fa-brands fa-twitter"></i>
                    </button>
                </a>
                <a target="_blank" rel="noreferrer" href="https://medium.com/@shivanipothirajan">
                    <button class="btn icon-btn center-items">
                        <i class="fa fa-brands fa-medium"></i>
                    </button>
                </a>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/shivani-pothirajan-2b276996/">
                    <button class="btn icon-btn center-items">
                        <i class="fa fa-brands fa-linkedin"></i>
                    </button>
                </a>
                <a target="_blank" rel="noreferrer" href="https://github.com/Shivani-1524">
                    <button class="btn icon-btn center-items">
                        <i class="fa fa-brands fa-github"></i>
                    </button>
                </a>
            </div>
        </footer>
    )
}

export { Footer }
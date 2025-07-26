import '../styles/components/Footer.scss';

function Footer() {

    const getCurrentYear = () => { return new Date().getFullYear();};
    return (
        <div className='Footer'>
            <p>Copyright&nbsp;©&nbsp;{getCurrentYear()}&nbsp;MharDev.&nbsp;All&nbsp;Rights&nbsp;Reserved.</p>
        </div>
    )
}

export default Footer

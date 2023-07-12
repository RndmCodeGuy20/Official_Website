import styles from './Recruitment.module.css'

const Recruitment = () => {
  return (
    <div  
      className={styles["container"]}
      style={{ 
        paddingTop: "7rem"
      }}
    >
        <iframe
        src="https://lu.ma/embed-checkout/evt-tvsZgbeVPyf6KCY"
        
        style={{
          width: '100%',
          height: '100vh',
          border: 'none',
          backgroundColor: 'black'
        }}
      ></iframe>
    </div>
  )
}

export default Recruitment
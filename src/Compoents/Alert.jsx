function Alert(props){
    return ( 
      props.alertMsg &&  <div class="alert alert-warning alert-dismissible fade show" role="alert">
    <strong>{props.alertMsg.type}</strong> : {props.alertMsg.msg}
    <button type="button"  class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
  
    )
}

export default Alert
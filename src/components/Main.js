export default function Main(){
    return(
        <div className="main">
        <div className="center">
        <div className="menu">
          <div className="logo">
            <h3>Teste</h3>
          </div>
            <div className="item-menu">
                <a href="#">Login</a>
            </div>
        </div>

        <div className='form'>
        <h2>Entre em Contato!</h2>
          <form>
            <div className='items-form'> 
              <input placeholder="Seu nome..." type="text"/>
              <input placeholder="Seu e-mail..."  type="text"/>
              <input placeholder="Seu telefone..."  type="text"/>
              <input placeholder="Seu endereço..."  type="text"/>
              <input type="submit"/>
            </div>
          </form>
        </div>
        </div>
        </div>
    )
}
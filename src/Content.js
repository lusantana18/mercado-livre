import React, { useState } from 'react';

const Modal = ({ onClose, onCadastroSucessoClose }) => {
  return (
    <div style={{ 
        position: 'fixed', 
        top: '50%', 
        left: '50%', 
        transform: 'translate(-50%, -50%)', 
        backgroundColor: 'white', 
        padding: '5%', 
        zIndex: '1000', 
        display: 'flex', 
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '90%',
        maxWidth: '800px', // Limitando a largura máxima
        height: '83%',

      }}>
        
        <div style={{ width: '48%', marginBottom: '20px'}}>
          <h2 style={{color:'#1e3973', fontWeight: 'bold'}}>Cadastro</h2>
      
          <label htmlFor="nomeCompleto"></label>
          <input type="text" id="nomeCompleto" name="nomeCompleto" placeholder='Nome Completo' style={{ width: '100%' }} required/><br /><br />
      
          <label htmlFor="cpf"></label>
          <input type="number" name="cpf"  placeholder='CPF'  style={{ width: '100%' }}/><br /><br />
      
          <label htmlFor="numeroPedido"></label>
          <input type="number" id="numeroPedido" name="numeroPedido" placeholder='Numero do Pedido Mercado Livre' style={{ width: '100%' }}/><br /><br />
      
          <label htmlFor="dataCompra"></label>
          <input type="date" id="dataCompra" name="dataCompra" placeholder='Data de Compra' style={{ width: '100%' }}/><br /><br />
      
          <label htmlFor="telefone"></label>
          <input type="tel" id="telefone" name="telefone" placeholder='Telefone Celular' style={{ width: '100%' }}/><br /><br />
      
          <label htmlFor="email"></label>
          <input type="email" id="email" name="email" placeholder='E-mail' style={{ width: '100%' }} /><br /><br />
        </div>
      
        <div style={{ width: '48%', marginBottom: '20px' }}> <br></br><br></br>
          <h6 style={{color:'#1e3973', textAlign:'left'}}>Endereço Completo</h6>
          <br />

          <label htmlFor="cep"></label>
          <input type="text" id="cep" name="cep" placeholder='CEP'  style={{ width: '100%' }}/><br /><br />

          <label htmlFor="logradouro"></label>
          <input type="text" id="logradouro" name="logradouro" placeholder='Logradouro' style={{ width: '100%' }}/><br />

          <div style={{ display: 'flex', justifyContent: 'space-between', gap: '10px' }}>
            <div style={{ width: '48%' }}> <br></br>
              <label htmlFor="numero"></label>
              <input type="text" id="numero" name="numero" placeholder='Número' style={{ width: '100%' }}/><br /><br />
            </div>

            <div style={{ width: '48%' }}> <br></br>
              <label htmlFor="complemento"></label>
              <input type="text" id="complemento" name="complemento" placeholder='Complemento' style={{ width: '100%' }} /><br /><br />
            </div>
          </div>

          <label htmlFor="bairro"></label>
          <input type="text" id="bairro" name="bairro" placeholder='Bairro' style={{ width: '100%' }} /><br /><br />

          <div style={{ display: 'flex', justifyContent: 'space-between', gap: '10px' }}>
            <div style={{ width: '48%' }}>
              <label htmlFor="cidade"></label>
              <input type="text" id="cidade" name="cidade" placeholder='Cidade' style={{ width: '100%' }} /><br /><br />
            </div>

            <div style={{ width: '48%' }}>
              <label htmlFor="estado"></label>
              <input type="text" id="estado" name="estado" placeholder='Estado' style={{ width: '100%' }}/><br /><br />
            </div>
          </div>
        </div>

        <div style={{ width: '100%' }}>
          <button onClick={onClose} type="button" className="btn btn-primary" style={{ width: '30%' }}>Cadastrar</button>
        </div>
      </div>
  );
};

const CadastroSucessoModal = ({ onClose }) => {
  return (
    <div style={{ 
        position: 'fixed', 
        top: '23.8%', 
        left: '50%', 
        transform: 'translate(-50%, -50%)', 
        backgroundColor: 'white',  
        zIndex: '1000', 
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        maxWidth: '500px', // Limitando a largura máxima
      }}>

<button onClick={onClose} style={{
          cursor: 'pointer',
          fontSize: '20px',
          fontWeight: 'bold',
          border: 'none',
          backgroundColor: '#667fff',
          position: 'absolute',
          top: '9px',
          right: '10px',
          borderRadius: '100%',
        }}>&times;</button> <br></br><br></br>
                
        <h2 style={{color:'#1e3973', fontWeight: 'bold', fontSize:'30px'}}>Cadastro Realizado com Sucesso!</h2>
        <p>Obrigado por efetuar o cadastro, em breve você receberá <br></br> um e-mail sobre como acionar o seu novo serviço.
        </p>
        <p>Confira em seu e-Mail de cadastro.</p>
      </div>
  );
};

const Content = () => {
  const h1Style = { marginTop: '1px', color:'#1e3973', fontWeight: 'bold', fontSize:'40px'};

  const [mostrarModal, setMostrarModal] = useState(false);
  const [mostrarCadastroSucessoModal, setMostrarCadastroSucessoModal] = useState(false);

  const handleAcessarClick = () => {
    setMostrarModal(true);
  };

  const handleCloseModal = () => {
    setMostrarModal(false);
    setMostrarCadastroSucessoModal(true);
  };

  const handleCadastroSucessoClose = () => {
    setMostrarCadastroSucessoModal(false);
  };

  return (
<div className="container" style={{ 
  background: 'linear-gradient(to right, #ffa500, #ffd700, #ffd700)',
  width: '100%', 
  textAlign: 'center', 
  paddingTop: '20px'
}}>   
        <div style={{ color: '#0e2396' }}>
        <h1>Serviços</h1>
        </div>
      <h1 style={h1Style}>Mercado</h1>
      <h1 style={h1Style}>Livre</h1>
      <p style={{ color: '#0e2396' ,fontWeight: 'bold' }}>Digite o número do pedido:</p> 
      <input type='number'></input> <br/><br/>
      <button type="button" className="btn btn-primary" onClick={handleAcessarClick}>
        Acessar
      </button>

      {mostrarModal && <Modal onClose={handleCloseModal} />}
      {mostrarCadastroSucessoModal && <CadastroSucessoModal onClose={handleCadastroSucessoClose} />}
    </div>
  );
}
<script src="https://kit.fontawesome.com/YOUR-KIT-CODE.js" crossorigin="anonymous"></script>    
export default Content;

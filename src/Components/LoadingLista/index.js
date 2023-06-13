import './LoadingLista.css'

function LoadingLista(props) {

    return (
      <div className='cont-loading-lista'>
        
        <div className='cont-texto-loading-lista'>
            <div className='cont-letra-loading-lista l1'>     
                <div className='letra-loading-lista-1'>C</div>
                <div className='letra-loading-lista-2'>O</div> 
                <div className='letra-loading-lista-3'>O</div> 
                <div className='letra-loading-lista-4'>L</div>
            </div>

            <div className='cont-letra-loading-lista'>
                <div className='letra-loading-lista-5'>C</div> 
                <div className='letra-loading-lista-6'>H</div> 
                <div className='letra-loading-lista-7'>A</div> 
                <div className='letra-loading-lista-8'>R</div> 
                <div className='letra-loading-lista-8'>G</div> 
                <div className='letra-loading-lista-9'>E ...</div>
            </div>
        </div>
     
        <div className='bar-loading-lista'>
            <div className='color-bar'></div>
        </div>

      </div>
    );
}

export {LoadingLista};
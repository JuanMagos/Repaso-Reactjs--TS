export const TiposBasicos = () => {

    const nombre: string = 'Juan';
    const edad: number =  29;
    const estaActivo: boolean = true;

    const poderes: string[] = ['velocidad', 'volar', 'Respirar en el agua'];

    return (
        <>
         <h3>Tipos Básicos</h3>
         { nombre }, { edad }, { estaActivo ? 'activo' : 'no activo' }
         <br />
         { poderes.join(', ')}
        </>
    )
}

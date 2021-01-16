import { renderHook } from "@testing-library/react-hooks"
import { useFetch } from "../../hooks/useFetch"

describe('Haciendo pruebas sobre el hook useFetch', () => {

    const url = 'https://www.breakingbadapi.com/api/quotes/2';
    
    test('debe de retornar el estado por defecto ', () => {
        
        const { result } = renderHook( () => useFetch(url) )

        const{ data, loading, error} = result.current;

        expect(data).toBe(null)
        expect(loading).toBe(true)
        expect(error).toBe(null)
    })

    test('debe de retornar la información en la data, loading en false y error en null ', async() => {
        
        const { result, waitForNextUpdate } = renderHook( () => useFetch(url) );

        await waitForNextUpdate();

        const { data, loading, error } = result.current;

        expect(data.length).toBe(1);
        expect(loading).toBe(false);
        expect(error).toBe(null);
    })

    test('debe de retornar la un mensaje de error', async() => {
        
        const { result, waitForNextUpdate } = renderHook( () => useFetch(`https://reqres.in/apid/users?page=2`) );

        await waitForNextUpdate();

        const { data, loading, error } = result.current;

        expect(data).toBe(null);
        expect(loading).toBe(true);
        expect(error.includes('buscar')).toBe(true);
        expect(error).toBe('No se pudo buscar la informacion')
    })
    
    
})

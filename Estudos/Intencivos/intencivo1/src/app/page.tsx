import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Home - Aula Next JS do zero!',
  description: 'Aprendendo Next JS do zero com Sujeito Programador!',
  openGraph:{
    title: 'Aprendendo Next JS com Sujeito No Youtube!',
    description: 'Aprendendo Next JS do zero com Sujeito Programador!',
    images: ['https://sujeitoprogramador.com/steve.png'],
  },
  robots:{
    index:true,
    follow:true,
    nocache: true,
    googleBot:{
      index:true,
      follow: true,
    }
  }
};

export default function Home(){
  return(
    <div>
      <h1>Pagina HOME</h1>
    </div>
  )
}
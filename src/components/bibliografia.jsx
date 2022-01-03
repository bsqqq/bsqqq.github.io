import React from 'react'
import '../styles/bibliografia.css'
import { FaLinkedin } from 'react-icons/fa'
import { GrMailOption } from 'react-icons/gr'

export default function Bibliografia() {
    return (
        <>
            <div className='bibliografia'>
                <h2 className='sobreMim' style={{ color: 'white' }}>Um pouco sobre mim...</h2>
                <div id='divBio'>
                    <a href="https://www.github.com/bsqqq" target="_blank" style={{ borderRadius: 500, width: 'auto' }} rel="noreferrer">
                        <img src="https://avatars.githubusercontent.com/u/55242418?v=4" alt="foto de perfil do github" id='imgGithub' />
                    </a>
                    <p className='texto' style={{ color: 'white', fontSize: 20, paddingLeft: 20 }}>
                        Como já sabem, meu nome é Vinicius, nasci em 27 de Agosto de 1999
                        e estudo programação desde 2019 no curso de Engenharia da Computação,
                        mas saí e fui para o curso de Ciência da Computação.
                        Por que eu saí do curso de engenharia? Simplesmente confundi as ementas
                        dos cursos e achei que o que gostaria de estudar realmente estava na engenharia,
                        mas não me atentei as cadeiras que iria estudar, logo depois do primeiro semestre
                        eu percebi a diferença dos cursos e logo que acabou o semestre mudei para Ciência
                        da Computação. E aqui estou até hoje, com um objetivo de trabalhar com Segurança da Informação
                        tanto na Web, Desktop e Mobile também, atualmente tenho como hobbie estudar engenharia reversa e
                        procurar por falhas de XSS (Cross-Site-Scripting) em alguns desafios online apropriados para isso.
                    </p>
                </div>
            </div>
            <p style={{ color: 'white', textAlign: 'center', fontSize: 20, marginTop: 0 }}>Aqui vai algumas informações sobre meus repositórios...</p>
            <div id='githubStatus' >
                <img
                    src="https://github-readme-stats.vercel.app/api?username=bsqqq&show_icons=true&include_all_commits=true&count_private=true&&hide=issues&theme=radical"
                    alt='github status'
                    loading='lazy'
                />
                <img
                    src="https://github-readme-stats.vercel.app/api/top-langs/?username=bsqqq&layout=compact&theme=radical&hide=kotlin,java"
                    alt='top langs'
                    loading='lazy'
                />
            </div>

            <p style={{ color: 'white', textAlign: 'center', fontSize: 20, marginTop: 0 }}>Entre em contato comigo agora mesmo!</p>
            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <div style={{ display: 'flex', marginBottom: 10 }}>
                    <a href="https://www.linkedin.com/in/vinicius-m-aragao" style={{display: 'flex'}} ><FaLinkedin style={{ fontSize: 50 }} /> <p style={{ marginTop: 10, marginLeft: 5, color: 'white' }}>LinkedIn</p></a>
                </div>
                <div style={{ display: 'flex', marginBottom: 10 }}>
                    <a href="mailto:viniciusmouraaragao@hotmail.com" style={{display: 'flex'}} ><GrMailOption style={{ fontSize: 50 }} /><p style={{ marginTop: 10, marginLeft: 5, color: 'white' }}>E-mail</p></a>
                </div>
            </div>
        </>
    )
}
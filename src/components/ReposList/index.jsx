import { useEffect, useState } from "react"

import styles from './ReposList.module.css'

const ReposList = ({nomeUsuario}) => {

    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true);

    useEffect(() => {
        setEstaCarregando(true);
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
        .then(res => res.json())
        .then(resJson => {
            setTimeout(() => {
                setEstaCarregando(false);
                setRepos(resJson);
            }, 3000);
        });
    }, [nomeUsuario]);

    return (
        <main>
            <div className = "container">
                {estaCarregando ? (
                    <h2>Carregando...</h2>
                ) : (
                    <ul className = {styles.list}>
                        {/* {repos.map(repositorio => ( */}
                        {repos.map(({id, name, language, html_url}) => (
                            <li key = {id} className = {styles.listItem}>
                                <div className = {styles.itemName}>
                                    <b>Nome:</b>
                                    {name}
                                </div>
                                <div className = {styles.itemLanguage}>
                                    <b>Linguagem:</b>
                                    {language}
                                </div>
                                <a className = {styles.itemLink} target = "_blank" href = {html_url}>Visitar meu github</a>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </main>
    )
}

export default ReposList;
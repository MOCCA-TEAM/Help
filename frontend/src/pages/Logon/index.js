import React from 'react';
import './styles.css';
import { FiLogIn } from 'react-icons/fi';

export default function Logon(){
    return (
        <div className="logon-container">
            <section className="form">
                <form>
                    <h1>Logon</h1>
                    <input placeholder="Sua ID" />
                    <button type="submit">Entrar</button>
                    <a href="/register">
                        <FiLogIn size={16}/>
                        Não Tenho Cadastro</a>
                </form>
            </section>
        </div>
    );
}
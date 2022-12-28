import { useNotification } from "./hooks/NotificationHook";

function App() {
  const notify = useNotification();

  return (
    <div className="app">
      <h1>Notificações Context API</h1>

      <button
        onClick={() =>
          notify.info({ title: "Informação", description: "Descrição do info" })
        }
      >
        Abrir Notificação Info
      </button>

      <button
        onClick={() =>
          notify.success({ title: "Sucesso", description: "Descrição do sucesso" })
        }
      >
        Abrir Notificação Sucesso
      </button>

      <button
        onClick={() =>
          notify.error({ title: "Erro", description: "Descrição do erro" })
        }
      >
        Abrir Notificação Erro
      </button>

      <button
        onClick={() =>
          notify.warning({ title: "Aviso", description: "Descrição do Aviso" })
        }
      >
        Abrir Notificação Aviso
      </button>
    </div>
  );
}

export default App;

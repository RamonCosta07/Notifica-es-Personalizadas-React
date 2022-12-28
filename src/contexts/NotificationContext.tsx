import { createContext, ReactNode, useState } from "react";
import { NotificationProps } from "../components/Notification";
import Notification from "../components/Notification";

type AddNotificationProps = Omit<NotificationProps, "id">;

interface NotificationContextProps {
  add: (notification: AddNotificationProps) => string;
  remove: (id: string) => void;
}

export const NotificationContext = createContext<NotificationContextProps>({
  add: (_notification: AddNotificationProps) => "",
  remove: (_id: string) => {},
});

interface NotificationProviderProps {
  children: ReactNode;
}

const makeHash = () => Math.random().toString(36).slice(2, 10);

export const NotificationProvider = ({
  children,
}: NotificationProviderProps) => {
  const [notifications, setNotifications] = useState<NotificationProps[]>([]);

  const add = (notification: AddNotificationProps) => {
    const id = makeHash();
    setNotifications((prev) => [{ id, ...notification }, ...prev]);
    return id;
  };

  const remove = (id: string) => {
    setNotifications((notifications) =>
      notifications.filter((item) => item.id !== id)
    );
  };

  const value = {
    add,
    remove,
  };

  return (
    <NotificationContext.Provider value={value}>
      {children}
      <div className="notifications">
        {notifications.map((item) => (
          <Notification
            key={item.id}
            {...item}
            onClose={() => remove(item.id as string)}
          />
        ))}
      </div>
    </NotificationContext.Provider>
  );
};

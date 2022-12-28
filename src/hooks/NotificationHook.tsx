import { useContext } from "react";
import {
  NotificationProps,
  NotificationType,
} from "../components/Notification";
import { NotificationContext } from "../contexts/NotificationContext";

export type NotifyProps = Pick<NotificationProps, "title" | "description" | "timeout">;

export const useNotification = () => {
  const { add, remove } = useContext(NotificationContext);
  const makeNotification = (type: NotificationType) => {
    return (props: NotifyProps) => {
      return add({ ...props, type });
    };
  };

  return {
    add,
    remove,
    success: makeNotification("success"),
    warning: makeNotification("warning"),
    error: makeNotification("error"),
    info: makeNotification("info"),
  };
};

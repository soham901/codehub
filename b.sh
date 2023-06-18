select op in RUN_DEV MIGRATE
do
  case $op in

    RUN_DEV)
        source backend/env/bin/activate
        ./backend/manage.py runserver
    ;;

    MIGRATE)
        source backend/env/bin/activate
        ./backend/manage.py makemigrations
        ./backend/manage.py migrate
    ;;

    *)
        echo "Invalid selection"
    ;;
  esac
done

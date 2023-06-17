select department in RUN_DEV BE_MIGRATE
do
  case $department in

    RUN_DEV)
        open "http://localhost:8000"
        ./backend/manage.py runserver
    ;;

    BE_MIGRATE)
        ./backend/manage.py makemigrations
        ./backend/manage.py migrate
    ;;

    *)
        echo "Invalid selection"
    ;;
  esac
done

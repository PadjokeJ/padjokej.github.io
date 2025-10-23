rm ./built.html

touch built.html

echo "<!DOCTYPE html>" >> built.html
echo "<html>" >> built.html
echo -e "$(<header.html)" >> built.html
echo "</html>" >> built.html

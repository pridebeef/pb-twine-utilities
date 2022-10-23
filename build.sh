npx extwee -c \
	-s $3 \
	-i <(python ./preprocessor.py $1) \
	-o $2

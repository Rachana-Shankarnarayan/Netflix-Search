# app.py

from flask import Flask, render_template, request, jsonify
from metaphor_python import Metaphor

app = Flask(__name__)

# Replace with Metaphor API key
metaphor_api_key = "202a0426-50bf-4850-8616-0b1ad9e282f2"
metaphor = Metaphor(metaphor_api_key)


def get_message():
    return "Welcome to Netflix Search!"


@app.route('/')
def index():
    message = get_message()
    return render_template('index.html', message=message, show_genre_section=True, search_result=None,
                           show_movie_section=True)


# Searching via neural
@app.route('/search_genre', methods=['POST'])
def search_genre():
    genre = request.form['genre']

    try:
        response = metaphor.search(
            genre,
            num_results=10,
            include_domains=["www.netflix.com"],
            use_autoprompt=True
        )

        ids = [res.id for res in response.results]

        response = metaphor.get_contents(ids)

        return jsonify(response.contents)

    except Exception as e:
        error_message = str(e)
        # Return error message as JSON with a 500 status code
        return jsonify({"error": error_message}), 500


# Searching via keyword
@app.route('/search_movie', methods=['POST'])
def search_movie():
    movie = request.form['movie']

    try:
        response = metaphor.search(
            movie,
            num_results=10,
            include_domains=["www.netflix.com"],
            use_autoprompt=True,
            type="keyword"
        )

        ids = [res.id for res in response.results]

        response = metaphor.get_contents(ids)

        return jsonify(response.contents)

    except Exception as e:
        error_message = str(e)
        # Return error message as JSON with a 500 status code
        return jsonify({"error": error_message}), 500


if __name__ == '__main__':
    app.run()

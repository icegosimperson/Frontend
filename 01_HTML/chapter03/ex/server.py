from flask import Flask, request, render_template

app = Flask(__name__)

votes = {"Option A": 0, "Option B": 0}

@app.route('/')
def index():
    return render_template("index.html", votes=votes)  # HTML 파일 렌더링

@app.route('/vote', methods=['POST'])
def vote():
    choice = request.form.get("vote")
    if choice in votes:
        votes[choice] += 1
    return render_template("index.html", votes=votes)

if __name__ == '__main__':
    app.run(host='10.10.0.31', port=5000, debug=True)
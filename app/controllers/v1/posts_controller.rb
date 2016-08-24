class V1::PostsController < V1::BaseController
  def index
    render json: Post.all, status: :ok
  end

  def create
    post = Post.create(content: params[:body])

    render json: post, status: :created
  end

  def destroy
    post = Post.find_by(id: params[:id])
    post.destroy

    render json: Post.all, status: :ok
  end
end


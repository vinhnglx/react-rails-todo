class V1::PostsController < V1::BaseController
  def index
    render json: Post.all, status: :ok
  end
end

class BidsController < ApplicationController

  def create
    @bid = Bid.create!(bid_params)
    @item = Item.find(params[:bid][:item_id])
  end


  private
    # Only allow a trusted parameter "white list" through.
    def bid_params
      params.require(:bid).permit(:amount, :item_id)
    end
end

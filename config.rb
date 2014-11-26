###
# Compass
###

# Susy grids in Compass
# First: gem install susy
# require 'susy'

# Change Compass configuration
# compass_config do |config|
#   config.output_style = :compact
# end

###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
# page "/path/to/file.html", :layout => false
#
# With alternative layout
# page "/path/to/file.html", :layout => :otherlayout
#
# A path which all have the same layout
# with_layout :admin do
#   page "/admin/*"
# end

# Proxy (fake) files
# page "/this-page-has-no-template.html", :proxy => "/template-file.html" do
#   @which_fake_page = "Rendering a fake page with a variable"
# end

###
# Helpers
###

# Automatic image dimensions on image_tag helper
# activate :automatic_image_sizes

# Methods defined in the helpers block are available in templates
# helpers do
#   def some_helper
#     "Helping"
#   end
# end
ready do
  hits = []

  sitemap.resources.select { |s| s.path.include?("startups") && !s.path.include?("images") }.each do |p|
    hits.push p
  end

  Middleman::Application.set(:startups, hits)

  old_startups = [
    "77Pieces",
    "ApeForest",
    "Bella Builder",
    "Destination Content",
    "Down the Road",
    "EFTPlus",
    "Forusers",
    "Graduate Factory",
    "HPSport",
    "HomeHub",
    "JumpOnBoard",
    "Loop Solutions",
    "Mobilista",
    "OceanMarkets",
    "OceanBrowser",
    "Ohso",
    "ParkHawk",
    "PixoPoint",
    "Popin",
    "Potluck Palace",
    "Room4Rent",
    "Splashroom Media",
    "Too Hard Basket",
    "UnitLink",
    "Virtuoso Online",
    "Worknow",
    "Xplrnz/iVisit",
    "Keen",
    "6b",
    "Avid Online",
    "Duned.in",
    "NZ Sport Social",
    "SmartEBusiness"
  ]

  Middleman::Application.set(:old_startups, old_startups)
end


helpers do
  def startup_list
    hits = Middleman::Application.startups
    attrs = []
    hits.each do |h|
      ret_val = {}
      ret_val[:uri] = "/" + h.path
      ret_val[:title] = h.metadata[:page]["title"]
      ret_val[:logo] = h.path[0..-6] + "/logo.png"
      ret_val[:logo_grey] = h.path[0..-6] + "/logo-grey.png"
      attrs.push ret_val
    end
    return attrs
  end

  def old_startups
    Middleman::Application.old_startups
  end
end

set :css_dir, 'stylesheets'

set :js_dir, 'javascripts'

set :images_dir, 'images'

activate :livereload

page "/startups/*", :layout => "startup_layout"

# Build-specific configuration
configure :build do
  # For example, change the Compass output style for deployment
  activate :minify_css

  # Minify Javascript on build
  activate :minify_javascript

  # Enable cache buster
  # activate :cache_buster

  # Use relative URLs
  activate :relative_assets
  set :relative_links, true

  # Compress PNGs after build
  # First: gem install middleman-smusher
  # require "middleman-smusher"
  # activate :smusher

  # Or use a different image path
  # set :http_path, "/Content/images/"
end

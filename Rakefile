NAME = "color-redmine-priorities"

MAIN_SCRIPT = "color-redmine-priorities.js"
BUILD_DIR = File.join(".", "build")

CHROME = "chrome"
FIREFOX = "firefox"

desc "Clean"
task :clean do
  rm_rf BUILD_DIR
end

desc "Prep"
task :prep => :clean do
  mkdir_p BUILD_DIR
end

desc "Build all"
task :build => [:build_chrome, :build_firefox] do
end

desc "Build Chrome extension"
task :build_chrome => :prep do
  cp_r CHROME, BUILD_DIR
  ext_dir = File.join(BUILD_DIR, CHROME)
  cp MAIN_SCRIPT, ext_dir
  cp Dir.glob("icon-*.png"), ext_dir
  sh "cd #{ext_dir}; zip -r #{NAME}.zip * -x *.DS_Store *.git*"
end

desc "Build Firefox extension"
task :build_firefox => :prep do
  #TODO
end

task :default do
end

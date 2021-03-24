#!/usr/bin/env ruby
result = `sass scss/madosel.scss madosel.css`
raise result unless $?.to_i == 0
raise "When compiled the module should output some CSS" unless File.exists?('madosel.css')
puts "SASS compile was successful."

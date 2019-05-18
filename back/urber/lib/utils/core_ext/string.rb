require 'nokogiri'

module Utils
  module CoreExt
    String.class_eval do
      def safe_strip_tags
        string = escape_html_partly(self)
        Nokogiri::HTML(string).text
      end

      def safe_strip_tags!
        replace(safe_strip_tags)
      end

      def strip_special_chars
        safe_strip_tags.gsub(%r{[#%^;?/\\{}|]}, '').strip
      end

      def strip_special_chars!
        replace(strip_special_chars)
      end

      private

      def escape_html_partly(string)
        string.gsub(/['&"]/, "'" => '&#39;', '&' => '&amp;', '"' => '&quot;')
      end
    end
  end
end

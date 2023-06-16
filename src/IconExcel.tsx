import * as React from "react";

function SvgIconExcel(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      id="Layer_1"
      x={0}
      y={0}
      width="1em"
      height="1em"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
      {...props}
    >
      <image
        id="image0"
        width={512}
        height={512}
        x={0}
        y={0}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAAIGNIUk0AAHomAACAhAAA+gAAAIDo AAB1MAAA6mAAADqYAAAXcJy6UTwAAAAGYktHRAAAAAAAAPlDu38AAAAJcEhZcwAAAGAAAABgAPBr Qs8AACg7SURBVHja7d15nFxVmf/x73Ork0Do7gRQQQUcByVhRjQRht/4Y1EIDOIgrkHZlEEMkBAk EcKiP9oeEQKIkIVdBAQFyegwwAgjkLCI+hoHWXSGBHEAQRQRSHoBknTd5/dHp6tvLZ10urvqVNX5 vF9KV51773mec6q77zdblwQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAaGAWugFUQYcn0/5+5U7u2iUxm5rmbSdL1Gbukzy1raR0i8K56YaP vuGTwUvmSjNjackxL/lY6Xil+SpdO4J6JklpUnTK4DMrfHInXn60sF4VfxFkrx+oXzjuVv4F40nh muyxovPSgbkHR81LxtLK1w4+3lCnZL/MrUK97FVDzFmyJ4lnj1vpbhWeWVo+T/F5/fuUrVmhQyVp Zs5MP8Wvhb8i2Z+U+i/zfS13fve89pcFYMwQAJqBu027+7fv87zvb5buL7d9JbWV3WRdqji24aMN Mb6xazb5sYrX9Pdb4Wbj/Y8KY4WbW+YG7oM3pko3IJOV35QyAWCzxryseqGnwpiX1C4Zy/ZZdDOv EAAGxrL1i2qXrL94jwbPHdaYVwoXJa+JZ+oMNVa015VeE8ub/Gaz5GvXdE56SgBGjQDQwHa/+zc7 9XnL4eZ2nOTvGu3NlQBAAMjWr7MAMDDW57IvX/v1SYsFYFQIAA1o2j3/c6A8OVOuD0mysbq5EgAI ANn6dRoA+p+ZLbrmn9vnFXcEYHMQABrItOVP/qPS9GxJe1bj5koAIABk69d1AJDkSq7aMWk7sbPT Sv+2CIBhIAA0gN3uXvXXOUsXy+wfq3lzJQAQALL16z0AqL/+93fItX++s9P6BGCzJKOfAlXT4cn0 e1edkcv5b2T2j6HbAerQEX/Id103c6bnQjcCNBp+B6BOTX/gt29WPn+Duw6SVJNfXfM7APwOQLZ+ g/wOwMCcy5I/tx951VW2XgCGhd8BqEPT739y3zSff9y14eYPYFNm+nZrfjCzw8eHbgRoFASAOjNt xaqPp57+h0nbh+4FaChun5icdt96TIdvMfrJgOZHAKgj0x544hiZLzOJb2DASLgOHtfXc+u8eb5l 6FaAekcAqBPT71t5otyuldQSuhegsflBr03svuPoU/+0VehOgHpGAKgD0x5Y9XE3LQndB9AsXNp/ ywkT75rb8XJ76F6AekUACGz6A098UPKbJfHPmICxtffavnF3zjr9lUmhGwHqEQEgoPf84tfbudlN kiaE7gVoUv9XuXHL55zZtW3oRoB6QwAIxT1pWd9yo6S3hm4FaG7+/j7ze2Z1dL0pdCdAPSEABDLt Z6vOlOyA0H0AcbBpWq97Tzi1+y2hOwHqBQEggN0f+u3O7vpq6D6AmJj0Xh/n95+0oPdtoXsB6gEB IIB82reIf+sPBDF1fS6/4rgFr+0QuhEgNAJAjU372aqP88Y+QFC75HJ99806/ZWdQjcChEQAqDF3 57f+gfB2Nhv34KzTVu8cuhEgFN4NsIam/3TVwW7+41q/a17mY69Sdcn0etmxAelm1ElLrt2cHseg XiKN6t0Ak+yVZe8GmJS/G2BpHUlKrfyLyK2QrEfyboBJSU9FZ6ab6EeSeVJ83IvPSIrqbd67ASYl PVXcn7RoZ7PzvMWk1sGxMX03wIpjpXtbtKcumfw5z2vGlRdO+q2AyBAAamjaQysflLR3DQPAX+R2 h0z/1rd+3c9/87HdXgy9B4jXkZ2vfNfkR0v1FAAkSS+kphlXnde+MvQeAbXEz52vkff//Mld0zTd u0blnnfT2bt0T/nussMsH3rtQJ17W5LqvhPO6j7ginPbfhO6GaBW+DsANZJ6/698ql1G7p1bdm+1 y2MfnnotN39g2LZT3pfPPq1nWuhGgFohANSCe2LuR1W5So/MPvXowbt+7eeH7fh66CUDDejN+SRd MevUNf8ndCNALRAAauC9v/jt37lpxyqW6JIl+zx60JRbQ68VaGQmTbbE7ppDCEAECAA1kCg/o4rT p6n8qEf/YZdHQ68TaAYmTU4Tu3f2gu79QvcCVBMBoBbS5EPVmtpdHY8ftOvtoZcINJmtXH7bCad2 fyh0I0C1EACqbPf/+q9xMt+rStM/05vPXRh6jUCTajXTvx+/YPWBoRsBqoEAUGXr32j9a0kTqzK5 66tPfeTda0OvEWhePjHx5PYTF3QdGroTYKwRAKosl9OUKk39x0d/NuWm0OsDIjBBrltOnE8IQHMh AFSZS1OrNO+/qdPS0c8EYBgmKNEPTzx1zRGhGwHGCgGg+t5RjUmTxG4LvTAgMi0mu37Oqd2fDd0I MBYIAFXmrraqzJuM/3notQERanH5jbNP6zomdCPAaBEAqsySqgSAvzy63ztXh14bEKmcXNfMPrXr C6EbAUaDAFBt7q1VmHVN6GUBdaJX0tcD1E3kuvrEL6+ZG3oDgJEiAFSbaXwVZl0XellAvfj2OZPO NvkZAUqbyRbNOXXNKaH3ABgJAgCAhnf1OZPPN7fTA5Q2d7t4zrzur4beA2BzEQAANIWrvtF+gUmn Bilu/vXZ87s7Qu8BsDkIAACaxlXntF8k2YmSvNa1Tf61OfO7FobeA2C4CAAAmsrV32i7wk3HSwrx g7JOnzOv64LQewAMBwEAQNO5+pz2q800S2FCwGknzVtzqeQWeh+AjSEAAGhKV57Tfo27HSmpr9a1 XTZ7zindl3d0ON9jUbf45ATQtK4+t+1mlx0paX3Ni5uOf2VN95WEANQrPjEBNLWrz227xVyflFTz t8526biXV/fc0NHhLaH3AShFAADQ9K44r/0OuX9S0hs1L25+xMuruwgBqDsEAABRuPK8ST+W+yck vV7z4maffXl11/dnzfJxofcBGEAAABCNKxdOuiuVHSypp/bVbeb4Lbt/NHeuTwi9D4BEAAAQmavP a7s/kT4iqTtA+UM86f7XY47xLULvA0AAABCdy89rf9BMB0vqClD+4La2nlvnzfMtQ+8D4kYAABCl K85rf8iU7i/TKzUvbn7Q+nz3XbNn/7kabxcODAsBAEC0Ll84+WF57gBJf6l1bZP2zbVsceeCBS+1 hd4HxIkAACBqVyzc6hFXcoCklwKU3/v11ycsnzdvzTah9wHxIQAAiN6V57c+libaV9ILAcrv0deX 3D1nTte2ofcBcSEAAICkq85rX2mu/WX6Q+2r+/vN/J4vz+p6U+h9QDwIAACwweUXtK+S5feW9HSt a5vZtPXj9cApp/S+NfQ+IA4EAADIuGLh1s8k+fx+kn4XoPyuaV9++Ukn9b4t9D6g+REAAKDEpRdt /az1tewn11MByk9NlF8xd+5rO4TeBzQ3AgAAVHDZtyY+Z5bsI+m/A5TfxdK+B086afU7Q+8DmhcB AACGcNmFrX9aPy6Z4dKva17c9FeJ5+6bO3f1zqH3Ac2JAAAAG/Htc1tfHNdiMyQ9XvvqvlOS2oqT T17z7tD7gOZDAACATVhyXttLakk/ZK7/rH1129Hy9uC8Od1/G3of0FwIAAAwDJcvnPzquHz+IJl+ EaD8dqn78nkn9ewWeh/QPAgAADBMl1yy9Wr1vnGgS/cFKP+WNE3vn3fS6j1C7wOaAwEAADbDZZe9 pWcrvXaIScsDlN86TZO7552wZs/Q+4DGRwAAgM30zW9u37u+tfujkt8ToPzkvNlPTjm+6wOh9wGN jQAAACNwVefbX8utaz9E0u21rm3SJCXJ3fNnd+8Xeh/QuAgAADBCS5bY2pda2z7t0q21r+5bpa47 Tj6+Z0bofUBjIgAAwCgs67R1b25r+4y5fhSg/MTE/LYvHd9zYOh9QOMhAADAKHV22roXn287zKUb A5SfaOa3f+nErkND7wMaCwEAAMbAsmWWf+m5tmMkXR+g/ARzWzbvhK5PhN4HNA4CAACMkWXLLP+m 9rZjZfpOgPLj3e0H80/o/lTofUBjIAAAwBjq7LT00m+1HWeypQHKj3PXD045oefo0PuA+kcAAIAx Z7704taTJVsUoHjO3K+d/8WuY0LvAuobAQAAqsJ86SVtp7jr3ADFc272nXlf7J4dehdQvwgAAFBF ly5q/4rkXw9Q2mRaesrx3XND7wHqEwEAAKps6SWTznbpjAClzVyL5h/Xc0roPUD9IQAAQA1cuqj9 fLlOD1Da3Pzi+bO6vxJ6D1BfCAAAUCNLF7dfYNKpQYq7zpl/XHdH6D1A/SAAAEANLVnUfpHLTpTk NS9u+tr8L/YsDL0HqA8EAACosaWL266Q6XhJae2r++lfPq7ngtB7gPAIAAAQwJJF7Ve7aZYChACX nzb/C10XSW6h9wHhEAAAIJCli9qvMbMjJfXVvLjZ/Plf7Lm8o8O5D0SKFx4AAlq8uO3mDSFgfc2L u47vfr7nCkJAnHjRASCwxYvbbklTfVLS2lrXNumL3c/33NDR4S2h9wG1RQAAgDpw6aXtd8j9k5Le qHVtk47oIQREhwAAAHVi8aWTfqzUPyHp9QDlP9vz+57vz5rl40LvA2qDAAAAdWTxZZPucrODJfXU vLhpZltf74/mzvUJofcB1UcAAIA6s2RJ2/1u+oik7tpX90PG93b/a8cxvkXofUB1EQAAoA4tWdL+ YGo6WFJX7avbwb3Wc+u8mb5l6H1A9RAAAKBOLV3a/pCn6f6SXglQ/qDcVj13zZ7959bQ+4DqIAAA QB1bfPnkh9Mkd4Ckv9S8uGnfia9veeeCY19qC70PGHsEAACoc0uWbPVImksOkPRSgPJ7p/kJy884 YvXWofcBY4sAAAANYMmS1sfyifaV9ELNi5vt0Tc+ufvMz3VtG3ofMHYIAADQIJYubV8p1/6S/lD7 6rb7+sTu+fLhXW8KvQ8YGwQAAGggiy5vX2We39tkTwcoPy0Zbw+cclTvW0PvA0aPAAAADeaSK7Z+ Jkly+0n6XYDyu47LpcsXHNv7ttD7gNEhAABAA7ro0i2fTSy3n6SnApSfqny6YsGRr+0Qeh8wcgQA AGhQ37ps4nPjEttHrv+udW2XdvFc+uCpR69+Z+h9wMgQAACggV14WeufPG8zJP269tX9r8xy9532 +dU7h94HbD4CAAA0uEXfbn0xP04z5Ho8QPmd5LkVpx2x5t2h9wGbhwAAAE1gyZK2l9bm8h+S7D8D lN/RcskDp3+++29D7wOGjwAAAE3i8ssnv+pr1x8k6RcBym/vqZaffmTPbqH3AcNDAACAJnLJdVuv Xpt7/UC57gtQ/i2e+P0Lju7dI/Q+YNMIAADQZC677C09uTd6D5FpeYDyW0vp3QuOWLNn6H3AxhEA AKAJffOG7Xt7vfWjku4JUH6ykuQnC45c8/eh9wFDIwAAQJO66ip7rW9C6yEyuz1A+Umy3D0Ljuje L/Q+oDICAAA0sSVLbG37q1t9WtKtta/uW1miOxYc2TMj9D6gHAEAAJpc5zJb17a69TNu+lGA8hNN ftuCo3oODL0PKEYAAIAIdC6zdc+/2nqYzG8MUH6iyW9fcFTXoaH3AYMIAAAQiWXLLP/cq23HmPz6 mhd3TTC3ZQsO7/p46H1APwIAAERk2TLLt7697ViZfSdA+fFmdssZh3d/KvQ+gAAAANHp7LT0W1dv dZxMSwOUH+emH5x5RM/Rofchdi2hGwCAUch98aurDxh8uolvaX3FT1uGcc5wtGzuNfnNWODm9LVZ ffTK3G6TtKfktf6hPTmXX3vmZ3t03s2tN9S4NjYgAABoZFu47G5JMklSKvnA4w2yz6143DOPC5LM aT7EPCXH0qTyuPkQ4zaM80t7LLnGBgZG0buXTFtjOTe//ozDu9sW3tR2Wbg24sUfAQAAQjFJS08/ vHtu6EZiRAAAAIRkJi068/CeU0I3EhsCAAAgNHP3i0//TM+XQjcSEwIAAKAumPm3Tv9M18dC9xEL AgAAoF4kSWI3nDazZ/vQjcSAAAAAqB+utnE57wjdRgwIAACAuuKuY0+f+cqk0H00OwIAAKDejM8l 4w4O3USzIwAAAOqOS3uF7qHZEQAA1IinoTtA4zDX20P30OwIAABqwlwvhe4BDcS0begWmh0BAEBt mJ4P3QIahwd9m4I4EAAA1EQ+tRWhewAwiAAAoCZu6tzmcUn/G7oPAP0IAABqx3Re6BYA9CMAAKiZ tVO3uVbSo6H7AEAAAFBDyw6zfEuafELSn0P3AsSOAACgpq7r3PqZJEk/ItcfQvcCxIwAAKDmrj/7 zQ+vV35Pd90ZuhcgVgQAAEHc3PnmF27s3OYj7skMl/1QUm/onoCYtIRuAEDcbuicvFzS8mM6nt4i SSdPyZvvICUTB477ho+JVPKjYVxKS45X+jWNDZ6jkh9GnGTO0RDnVJyn5Lyk5LxNzeU2jHk2MZcP cU7FX9WV/kidtMI8JeclG9mHsnlM35K0g9BQCAAA6sJ1ne98Q9JjG/6PBnLa57u/Vpwk0Aj4IwAA ACJEAAAAIEIEAAAAIkQAAAAgQgQAAAAiRAAAACBCBAAAACJEAAAAIEIEAAAAIkQAAAAgQgQAAAAi RAAAACBCBAAAACJEAAAAIEIEAAAAIkQAAAAgQgQAAAAiRAAAACBCBAAAACJEAAAAIEIEAAAAIkQA AAAgQgQAAAAiRAAAACBCBAAAACJEAAAAIEIEAAAAIkQAAAAgQgQAAAAiRAAAACBCBAAAACJEAAAA IEIEAAAAIkQAAAAgQgQAAAAiRAAAACBCBAAAACJEAAAAIEIEAAAAIkQAAAAgQgQAAAAiRAAAACBC BAAAACLUEroBNK89r39i275csq8r3cFT285MLUpLTtrYc9/4uYkkpVY0ZiqXpEVXFOaqlH6T7KO0 7Krya9JkE/MM9m0Vzixc7UNcW3pmpT0oq5dsdK7iefp3zNIhzit5lmzyvMH6yVDHC/MkG5/Lsx1W 7KZoP4b81cwQr3XRXg6xr0OOVzhWabzSejZ1vrv3SXpRbs/nxvv9F1886RUBVUAAwJibftOqGXI/ a73rg3LPSSYbuDMPfPSNPC/9RjnE8+ywlR23imHAKjywCjWsbFJJbmVty8qXUnZehUasUG+wsJU+ 8uxYpfP6a5XvhRdf5cW74ZXmsexDU+mkNtR5w9g398HBwsttJdcUvaYbee2K6nnRnNkXpNL1ZRs1 xLqG/MTyksuzaxjiGh/ipm9DjGf3Sibl11nfl+asud89+cbiy9pWCBhDBACMmWnXPj3Ztlh7vdwP Dd0L0CRaJJth5jO+NLvr1i36+o45/6pt1oRuCs2BvwOAMTH9e//zjmTC2l9I4uYPVMfH32hp+cXJ s17ZKXQjaA4EAIza39zym1blktvdNCV0L0CTm2rjWu6cO/fl9tCNoPERADBq49OWxZJ2C90HEAXX 31jfuItCt4HGRwDAqOx+yxO7mfT50H0AMTHpn04+ofs9oftAYyMAYFRSt5PF5xFQa7nENDd0E2hs fOPGyHV4IumQ0G0AUTJ9rKP/axAYET55MGLTdntiZ0nbh+4DiJJru1f+uOadodtA4yIAYMQstbeF 7gGIWTIu9/bQPaBxEQAwYqZkm9A9ADFL8r5t6B7QuAgAGLk0tdFPAmCkPDG+BjFiBAAAACJEAAAA IEIEAAAAIkQAAAAgQgQAAAAiRAAAACBCBAAAACJEAAAAIEIEAAAAItQSugGgjGlm3xvr7h3dJJM0 aeM1hnyepusOkey7VVjZzLUTdK8kTVozMOQVTvNhT1jpis2/unj9hZ0bo58xN6ze1mx6nvLXc2z2 rmytG1m3b+b4wLpaJuRmuHzZyJoDqoMAgLpjqXp+Pfu9r4aqv9elv+sd6X1kozzp+ensHYOtC+HM nremJ3F+ai/qC38EAABAhAgAAABEiAAAAECECAAAAESIAAAAQIQIAAAARIgAAABAhAgAAABEiAAA AECECAAAAESIAAAAQIQIAAAARIgAAABAhAgAAABEiAAAAECECAAAAESIAAAAQIQIAAAARIgAAABA hAgAAABEiAAAAECECAAAAESIAAAAQIQIAAAARIgAAABAhAgAAABEiAAAAECECAAAAESIAAAAQIQI AAAARIgAAABAhAgAAABEqCV0A0AZs32mfXtlW9l4vvhpbqjr8/1Hhzxe6fqiuX1PycZ+XUl+n/0v ebZNknL5oU/baOd5DWNdubJrhrVvpdfnKx3b1LWS8rmNHx9iXYPHc8O/Nl96fBMdDmcv8hqe/Cbm yZzjqU8b5qxAzRAAUHdcfpaZJC8M9LPi5y5JbkWHrPAfH7xs4IFs8LbuA9NY5pr+D+5Vuf1LbmcV llCoZ4V+BpfnZWPZPj0zpZWsX5LcPXNV/38yK9+wbwPXWMkeDda3zKQD12em7h8r2SvPTFZ4TXzw mVcYy+6/b/ivZU4eOMsrjG34X9G1pT0VPS9p1lV0sTLTlo+Xzpt54iXnFU7JfF4VzQXUAf4IAACA CBEAAACIEAEAAIAIEQAAAIgQAQAAgAgRAAAAiBABAACACBEAAACIEAEAAIAIEQAAAIgQAQAAgAgR AAAAiBABAACACBEAAACIEAEAAIAIEQAAAIgQAQAAgAgRAAAAiBABAACACBEAAACIUEvoBoBS7n6W WfJL2YaBtOSEDeOeeVyUZPv6j7oy52141FIyh9TSfzw/eG5i6d4y66jC0s6S65fZngpdWvaLMVdY t2cuHnhc9EVrxcckKWfZZwP7kZTNk1SYJ9uT5wfHWlQyZ2Y3s0daSuYanMezKyvppHSkpb83q3As zZ43cHZWTrKSmbPP+4rnLP98UOFzoZLSeQtVN3JNf9vp35l0roA6QgBA3Ulkj/zqC1PuCVV/r0t/ 117h3jR6njxy7/wdg60L4cyet6bF3EY/ETCG+CMAAAAiRAAAACBCBAAAACJEAAAAIEIEAAAAIkQA AAAgQgQAAAAiRAAAACBCBAAAACJEAAAAIEIEAAAAIkQAAAAgQgQAAAAiRAAAACBCBAAAACJEAAAA IEIEAAAAIkQAAAAgQgQAAAAiRAAAACBCBAAAACJEAAAAIEIEAAAAIkQAAAAgQgQAAAAiRAAAACBC BAAAACJEAAAAIEIEAAAAIkQAAAAgQgQAAAAiRAAAACBCBAAAACJEAAAAIEIEAAAAIkQAAAAgQgQA AAAi1BK6AaCcv+v9Vz+x+7BOXT/UgXEaN4LK4yTl8/7XidnYryrJv2u/Rc/uLknj1m/u1ZuxnvXZ q0ayBxu5an2l80dSo+TKYezHSOoMzD2aa0dj4HX2VO/y0U0FjDkCAOqOmy2RSRr4jjnER5OkxAYf D3x0SUqVDowVvvNa4Tz5wDWWuUZKJVXh3r+hD1sy0EualHTk2TWUjxXWUzQmmRevX5IsyV41cM3g mBXNYyV7NLhz2bGB6y0pGXMV9nlw7pLXxDN1Bmp4obsNr2Pm+pLXZGAsrTBWvG/lY9owd6HH7F04 e95Q48kQ4yXXmFceT5PK40A94I8AAACIEAEAAIAIEQAAAIgQAQAAgAgRAAAAiBABAACACBEAAACI EAEAAIAIEQAAAIgQAQAAgAgRAAAAiBABAACACBEAAACIEAEAAIAIEQAAAIgQAQAAgAgRAAAAiBAB AACACBEAAACIEAEAAIAItYRuAChj+o5SPVl47iXHPfvBN1ySGXNJSiqmW6vwwEprmN4j11FVWNh3 3PxJSUrS8sVZ6SPPjlU6T5Jb2RZZ5pkX5imfKXulZyYt7Jxn5ywvbrKy18bKGpTcBwcLr5OVXJNm S1rRFAMlktKFlrz2hdm8rIXyyTayrpLNLBp3VT5mQ1zjaWFsF5OOFVBHCACoO5Zq2a+Om3pXqPp7 Xfq7T0pVCABuy5bP2ynYuhDO7HlrPmxuBADUFf4IAACACBEAAACIEAEAAIAIEQAAAIgQAQAAgAgR AAAAiBABAACACBEAAACIEAEAAIAIEQAAAIgQAQAAgAgRAAAAiBABAACACBEAAACIEAEAAIAIEQAA AIgQAQAAgAgRAAAAiBABAACACBEAAACIEAEAAIAIEQAAAIgQAQAAgAgRAAAAiBABAACACBEAAACI EAEAAIAIEQAAAIgQAQAAgAgRAAAAiBABAACACBEAAACIEAEAAIAItYRuACjlpjunX7NS8oGByh9t w8mFx4Wx/keFsYHrMmPygWssc03/mLtnzxw7lt454+Jni3oq1PHsGsrHsn1mO7OS9WfHsvthqjQ2 eOXgHg2eO6yx0n4qvSaeqTPUWPY1rfCaDDVWvG/lY2X76GM0XnLMfBPj2eNAneB3AAAAiBABAACA CBEAAACIEAEAAIAIEQAAAIgQAQAAgAgRAAAAiBABAACACBEAAACIEAEAI5ck/HwzICBLna9BjBgB ACOW5tNXQ/cAxCzN2cuhe0DjIgBgxNKc/TF0D0DMEk9fCN0DGhcBACM2RVOekvSX0H0AkXq5/c3t z4RuAo2LAIARW3aY5SX/ceg+gBi57LbOTusL3QcaFwEAo+KeLBVvdgrUmrvs0tBNoLERADAqj352 yi8l3RK6DyAudtPiy7d6OHQXaGwEAIza2qRvtqTfhu4DiMTTLXn/Uugm0PgIABi1/znsPa8kqR0q 6bnQvQBNzez3ch180VXt/OVbjBoBAGPi4SOmrGzJ9e0p6f7QvQBNyXXfuLz+btHl7atCt4Lm0BK6 ATSPXx72nj/Jfb/pN638pElfcdn00D0Bjc9+Za5vXHJ5679Kxl+4xZghAGBsmfkj0g8l/fC93135 zlxO+7tsB3PfzmW5wfM2fPSSj0VzbfwcG+Jx8RNp8Iel+uAhHzit5OTyMwcfWYWzvcJDH7y6+Pzy WoUzM3NbhbmzRbxoRt90HauwHi85q0KtYdWxCtd48c5u6pZVXCezK5VeVM9+sKJ1mIYhe1J2Lzfy uTXkcn2Ix8Oo7UNc279uz8uTF938uVxffvklV2z9zHCWBmwuAgCq5vHPTX1a0jWh+wAAlOPvAAAA ECECAAAAESIAAAAQIQIAAAARIgAAABAhAgAAABEiAAAAECECAAAAESIAAAAQIQIAAAARIgAAABAh AgAAABEiAAAAECECAAAAESIAAAAQIQIAAAARIgAAABAhAgAAABEiAAAAECECQLW51lVh1vGhlwUA Bam2qMKsa0Mvq9kRAKrNrKcKs04OvSwAKLCqfE+qxvdOZBAAqsxTdVdh2m2nrXh6cui1AcC8L6zZ RtI2Yz2vy7tCr63ZEQCqzKwqAUCWrvtA6LUBQK5PVfleZG5V+d6JQQSA6nu2KrPm/WOhFwYA5snH qzJxYs+EXluzIwBUmUkrqzGvmw5Vh/P6AQhm5kzPyfTRasydpOmq0OtrdtxAqiyfV7U+id86fa8n jwy9PgDx+qstuo+Wa7tqzG0tXpVfPGEQAaDKxm3R87+SXqvG3C7/+odWPF2Nf34DABs1b6ZvKbN/ rs7s1pt7of3p0GtsdgSAKnt4jz3Wy+2hKk3/jjXr1y0IvUYA8WmZ2HOGpB2rM7v/tPM+6wu9xmZH AKgFS1dUa2qXd0z/ycpDQy8RQDy+/LnegyV9pWoF3JeHXmMMCAA14ErureL0ibtunPaTJ6eFXieA 5jf/c73TE0t/IClXrRpJkiMA1AABoAYe+8Au/yXp91Us0SZPH3zfnas+EXqtAJrXacf0fiRn6X2S 2qpXxZ9tmTLxV6HXGgMCQC2YpXK7scpVWs38X95318p//sAtz20ZeskAmkfHLJ946j91n+NKb5fU Xs1aZnZjZ6elodccAwJAjeRMN9SgTGLS/3u9rffJ9/145bEzb/Gq/RYdgObX0eEtpx7b9YXedT1P yvUV1eCekfR5Lb5XQpKFbiAm0x9a+YBL+8g3DGQ/Vhrb1MdNn/NHdy2T/O6kz371yMemvhB6DwDU twXH9r4ttfzu7naguWZK2r7wPUWSZR4POZ45ZiXnbXTc9MDCm9o+GHoPYkEAqKH3/2zlh1PXnTUM AKUfe93VbdJrZccGpJtRp/Q36TanxzGol0iS938KD3wiD35TscGxQs3BMfnAL2WsqMbgPEnZWFkd SUqt/IvIrfDLJCuae/BMKx3zwTmTkp6Kzkw30Y8ky/yAyOx+FO/bwIiV7NFgT5XGkpKeKu5PWrSz JfNkxzJXeqa3gWpeXKXSWHY/iquqaG4rqTOi8dLZM5+Pw7opDvU4M0/ZL6832qMNMT7i3ie6q92k iSNZ05gEALeDFv6g9SdCTRAAamzaQyt/KdcekkIEgI0es7GsU4N19fc78gAw9I1lw2hpAHArv+EO Z2wzA0ClsWyfxTf7Cjdhz141cE2lscErhxsAysZK+6n0mmRu9kOODeNmXzEAeMlrX6GnMQsAFeYt fT3HdHyTvWxGAAjUuzT8AOCuX51/c+seFWZClfB3AGosTb1KPzkLABpZejY3/9oiANTY4/vservM 7gjdBwDUD7/r/Jsn/XvoLmJDAAjAlD9JVXp/AABoMK/L0jmhm4gRASCAR/b6m2clPyd0HwAQnHnn wu9P/t/QbcSIABDIo3tNPV+yu0P3AQChuLTid+vbvhm6j1gRAEIxS9Mkd5SkP4ZuBQACeDHtsyOW LbN86EZiRQAI6PG93vVnS5PPuvRG6F4AoIbecPdPX7is9U+hG4kZASCwRz64ywOJ6zOSeO9rADHI u+no829q/2noRmJHAKgDj3xw6m0uPyl0HwBQda45F3yv7V9CtwECQN147IO7XinzfxK/EwCgOeVN OvH8m9quDN0I+hEA6sij++56nVJ9WtLroXsBgDFjWmuuwxd+r+2K0K1gEAGgzjy6/9R/c7d/kIl3 7gPQDP6QuM9Y+P22ZaEbQTECQB16bL8pP825vU/SnaF7AYCRcml52mJ7nPe99odC94JyBIA69fB+ U/7y6H1TDpG0QPzYYAANxXpNdtrEnVsPvPA6/qlfveLtgBvA++5d9XbJzzPpaN4OWCVvJ8rbARfV zoxl6/N2wIOPx2S85BhvB1z0dXZHkls/d+F1Wz8j1DUCQAN5/z0rP5xKZ0v6AAGAANA/DwGAAFA3 vf/ME+u88PrWnwgNgQDQgN5778r9LdVZ5tpfkhEACAAEAAJAoN5d0r0mnXvBd9tWCA2FANDA3vMf T+2Ys74jzPUFSe8mABAAsmPZ+gSAwcdjMl5yLMIA8Hs3u6mlL//thTdOekpoSASAJrHb3U/slsvb /uaa4dK+kiYRADaMEQAIAJnHYzJeciyCALDGTPenbstbpOXnX9f6a6HhEQCakbvtfs9/75hfl0yR crtI/g6ZTVKqNnNvdfmWhXPTgWtKAkD2uJecq8Frij5WOl5pvkrXjqCeSVJa/A9ZBp8N3vISLz9a fuMov36gfqUb++A8SeGashthyZqTCgGgMJZWvnbw8YY6JftVKQAozV41xJwle5JUuNlX2llLy+cp +6dElUJZyc4laWbOTD+V9y3bVfFY0Q2rUL98nor/3GmIG1/RXGnxOUPdRItkrsnu61Cv8UYDQOnX QOaawmfeMHtPSq4vn9Nel3uPpG6ZrU7cf+9uq3J9yZPn37DlcxW6AwAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4fx/nVfAlumudbIAAAAl dEVYdGRhdGU6Y3JlYXRlADIwMjMtMDYtMTZUMjE6MDQ6NTYrMDA6MDBiLOQKAAAAJXRFWHRkYXRl Om1vZGlmeQAyMDIzLTA2LTE2VDIxOjA0OjU2KzAwOjAwE3FctgAAACh0RVh0ZGF0ZTp0aW1lc3Rh bXAAMjAyMy0wNi0xNlQyMTowNDo1NiswMDowMERkfWkAAAAASUVORK5CYII="
      />
    </svg>
  );
}

export default SvgIconExcel;

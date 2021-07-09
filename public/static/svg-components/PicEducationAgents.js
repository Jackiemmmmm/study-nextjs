import { makeStyles, useTheme } from '@material-ui/styles';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import * as React from 'react';
const useStyles = makeStyles({
  root: {
    userSelect: 'none',
    width: '1em',
    height: '1em',
    display: 'inline-block',
    fill: 'currentColor',
    flexShrink: 0,
  },
});
const SvgPicEducationagents = React.forwardRef((props, ref) => {
  const classes = useStyles();
  const theme = useTheme();
  const { color, className } = props;
  return (
    <svg
      {...props}
      viewBox="0 0 256 205"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className={classnames(classes.root, className)}
      color={theme.colors[color] ?? color}
      ref={ref}
    >
      <defs>
        <path
          d="M120.612 63.66c40.251 7.774 63.375-27.725 96.9-19.115 33.524 8.61 55.292 44.388 20.87 72.27-31.074 25.168-194.304 33.904-223.719-5.973C-14.752 70.966 1.05 4.508 53.863.515c75.52-5.71 26.497 55.371 66.749 63.145z"
          id="pic-education_agents_svg__a"
        />
        <path id="pic-education_agents_svg__c" d="M0 .262h27.846v55.685H0z" />
        <path id="pic-education_agents_svg__e" d="M.373.186h.186v.187H.373z" />
        <path id="pic-education_agents_svg__f" d="M0 .13h81.813v22.892H0z" />
        <path id="pic-education_agents_svg__h" d="M.22.544h81.593v31.49H.22z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path
          d="M127.047 131.697c-5.706 33.937 69.789.55 75.184-18.954 3.049-11.023-18.754-26.269-37.735-32.2-14.603-4.563-37.575-8.368-43.155 2.337-11.844 22.721 9.858 24.13 5.706 48.817z"
          fill="#E2F4F2"
        />
        <g transform="translate(12.103 91.875)">
          <rect fill="#CFA900" width={139.947} height={91.321} rx={4} />
          <rect fill="#FCCE01" width={136.389} height={91.321} rx={4} />
          <rect fill="#FFF" x={5.93} y={6.116} width={124.529} height={74.717} rx={4} />
          <circle fill="#FFF" cx={67.94} cy={85.984} r={2.965} />
        </g>
        <g transform="translate(0 63.102)">
          <mask id="pic-education_agents_svg__b" fill="#fff">
            <use xlinkHref="#pic-education_agents_svg__a" />
          </mask>
          <use fill="#FFF8DA" xlinkHref="#pic-education_agents_svg__a" />
          <g mask="url(#pic-education_agents_svg__b)">
            <g transform="translate(12.103 28.773)">
              <path
                d="M52.762 111.483c3.732-2.944 5.598-6.922 5.598-11.934 0-5.011-1.294-8.023-3.883-9.034l12.845-2.327v-.425l1.174.213 1.175-.213v.425l12.845 2.327c-2.588 1.011-3.882 4.023-3.882 9.034 0 5.012 1.865 8.99 5.597 11.934z"
                fill="#98A7D3"
              />
              <rect fill="#CFA900" width={139.947} height={91.321} rx={4} />
              <rect fill="#FCCE01" width={136.389} height={91.321} rx={4} />
              <rect fill="#FFF" x={5.93} y={6.116} width={124.529} height={74.717} rx={4} />
              <circle fill="#FFF" cx={67.94} cy={85.984} r={2.965} />
              <path stroke="#979797" fill="#D8D8D8" d="M50.89 110.797h34.58v1H50.89z" />
            </g>
          </g>
        </g>
        <path
          fill="#FCCE01"
          d="M126.218 115.841l-.811 4.93-4.93.81 4.93.804.81 4.935.808-4.935 4.93-.804-4.93-.81zm-90.454 29.867l-.81 4.93-4.93.81 4.93.804.81 4.935.808-4.935 4.93-.804-4.93-.81zm72.533-42.667l-.57 3.464-3.464.57 3.464.564.57 3.468.567-3.468 3.464-.565-3.464-.57z"
        />
        <path
          d="M82.135 163.367c15.352 0 27.842-12.489 27.842-27.842 0-15.351-12.49-27.844-27.842-27.844"
          fill="#38B2A6"
        />
        <g transform="translate(54.29 107.42)">
          <mask id="pic-education_agents_svg__d" fill="#fff">
            <use xlinkHref="#pic-education_agents_svg__c" />
          </mask>
          <path
            d="M27.846.262C12.493.262 0 12.754 0 28.105 0 43.46 12.493 55.947 27.846 55.947"
            fillOpacity={0.783}
            fill="#38B2A6"
            mask="url(#pic-education_agents_svg__d)"
          />
        </g>
        <path
          d="M108.77 143.092c.045 0 .096.006.147.016a27.676 27.676 0 01-2.865 6.65c-.13.065-.267.126-.376.151-.263.065-.951.252-1.033.188-.081-.065-.364-.396-.28-.765l-.052-.478-.032-.242c-.146-.151-.26-.525-.26-.831 0-.3.026-1.052.182-1.095.154-.047.609-.586.744-1.015l.239-.264.199-.21c.104.172.19.188.19.038.002-.153.316-.405.469-.472.152-.07.565-.018.636-.19.071-.169.394-.687.562-.754.167-.067.672-.293.68-.42.008-.124.483-.297.85-.307zm-10.55-28.924c.018-.172.332-.349.424-.255.093.092.61.261.851.272l.102.002.26.001.141.002c.232.195.459.392.683.593.019.085.024.156.002.187-.068.098.165.526.564.61l.237.052a.667.667 0 00.107.003 27.919 27.919 0 016.857 10.808c-.207.31-.514.744-.633.79-.153.062-.423.748-.346 1.284.083.536-.568 1.366-.727 1.288-.16-.078-.301-.788-.432-.897-.129-.11-.325-.417-.305-.283.022.133-.261.434-.288.503-.026.066-.273.145-.312.217-.036.077.022.476.082.583.063.107.299.448.321.595.026.146.222.594.187.88-.04.286-.259.977-.295 1.01-.037.039-.352.278-.507.57-.157.291-.817 1.026-1.092 1.019-.276-.007-.505.44-.421.447.082.006.212.22.18.379-.033.156-.358.827-.393 1.422-.033.596-1.012 1.146-1.018 1.055-.005-.089-.21-.357-.366-.475-.157-.12-.534-.377-.573-.212-.041.165-.023.758.088.906.112.147.59.64.73.852.14.212.012.895-.262.67-.274-.224-1.005-.964-1.05-1.108-.044-.142-.075-.65-.032-.738.042-.09.06-.476-.002-.618-.062-.142-.374-.46-.385-.57-.008-.113-.08-.42-.316-.414-.24.007-.513-.388-.475-.462.039-.074-.052-.532-.151-.71-.1-.181-.546-.565-.72-.505-.175.062-.672.386-.814.486-.14.096-.256.739-.289.837-.035.1-.43.09-.43.167 0 .077-.055.281-.125.281-.071 0-.32.298-.392.66-.073.36-.385 1.333-.539 1.343-.154.011-.402-.218-.402-.332 0-.115-.065-.539-.143-.686-.079-.145-.408-.691-.488-.97-.08-.28-.466-.944-.506-1.054-.04-.11-.135-.553-.267-.584-.13-.03-.335-.313-.329-.38.009-.07-.085-.37-.405-.718l-.68.105-.193.035c-.055-.131-.213-.159-.35-.058-.14.101-.757.058-.797-.028-.043-.09-.304-.592-.526-.864-.226-.274-1.01-.823-1.077-.78-.065.042-.225.232-.181.354.047.124.47.34.556.519.084.178.325.66.437.588.112-.072.667.073.783.258.115.183.297.796.197.9-.1.103-.237.748-.392.87-.152.125-.707.378-.722.475-.016.096-.45.373-.797.54-.349.161-1.417.306-1.54.024a18.213 18.213 0 00-.787-1.463c-.182-.283-.772-1.121-.814-1.33-.042-.206-.29-.443-.266-.3.027.143.046.663.162.772.114.109.482.579.613.767.131.185.337 1.17.565 1.346.228.177.596 1.036.757 1.036.16 0 .662-.085.76-.189.1-.102.634.044.68.253.049.209-.188 1.1-.434 1.506-.248.406-1.012 1.539-1.133 1.636-.125.095-.522.559-.598.821-.076.262-.32 1.35-.279 1.918.04.572-.331 2.16-.65 2.487-.315.328-.677 1.83-.79 1.862-.112.031-.416.272-.455.42-.043.145-.187.826-.387 1.013-.2.19-.804 1.083-1.16 1.295-.357.209-1.687.105-1.809-.32a5.948 5.948 0 00-.244-.621l-.128-.289c-.147-.332-.28-.633-.28-.72 0-.17-.103-.907-.23-1.25-.127-.344-.612-1.341-.572-1.698.04-.357.284-1.375.249-1.684-.037-.305-.392-1.158-.476-1.47-.08-.314-.365-1.349-.283-1.644.082-.297-.046-1.318-.157-1.286-.115.032-.496.093-.636.014-.144-.077-.722-.252-.731-.472l-.181-.017-.391-.04c-.104.31-.409.564-.676.565-.267 0-1.082-.02-1.334-.171-.251-.155-1.003-.798-1.125-1.09-.124-.29-.556-1.345-.556-1.842 0-.497.105-1.98.236-2.183.131-.207.58-1.236.983-1.543l.145-.279.225-.434c.09-.622.297-1.19.463-1.262.166-.075.49-.473.625-.45.137.024.573.163.865.031.288-.125 1.514-.256 1.754-.343.237-.088 1.056-.067 1.09.043.032.107-.103.283-.027.356.072.07.353.618.714.769.357.149 1.139.645 1.195.493.056-.147.794-.32 1.295-.281.5.039 1.664.18 1.72-.029.057-.207.385-.658.385-.772 0-.115-.017-.284-.041-.12-.024.167-.424.142-.398.039.026-.103-.65-.217-1.154-.068l-.352-.271-.156-.119a1.663 1.663 0 01-.138-.51c-.004-.117.054-.62.002-.62s-.179.199-.163.446c.02.245-.003.811.15.819.152.009.086.399-.066.394-.152-.007-.282-.305-.251-.31.032-.007-.086-.09-.238-.08-.152.012-.403-.217-.403-.331 0-.119-.054-.548-.119-.705l-.075-.132c-.054-.091-.137-.336-.198-.416l-.32-.448c-.464-.387-.638-.497-.392-.248.25.25.643.937.56.846-.084-.09-.275.182-.207.205.068.024-.05.33-.198.403-.147.074-.33.563-.467.522-.136-.044-.133-.442-.002-.437.13.005.16-.353.05-.524-.11-.168-.694-.405-.72-.515-.025-.108-.171.023-.084.324.089.3-.516.34-.592.02-.076-.32.012-.901-.145-.803-.156.103-.79.08-.912.274-.124.195-.712.717-.783 1.003-.073.284-.448.899-.56.843-.115-.053-.667.03-.786-.054-.117-.087-.694-.197-.728-.37-.036-.174-.105-.806-.08-1.027.023-.22.37-.804.647-.871.274-.067 1.002.06 1.055-.015.052-.079.095-.36-.024-.46-.12-.1-.297-.643-.45-.635-.155.011-.345-.206-.275-.303.07-.098.437-.343.53-.47.097-.127.633-.206.664-.23.031-.026-.202-.16-.498-.15-.296.008-.946.04-.86-.017.089-.062.27-.319.192-.45-.075-.13.06-.708.207-.721.144-.014.165-.408.096-.425-.07-.016-.323-.352-.275-.572.049-.219.11-1.021.223-1.087.116-.066.533-.014.492.074-.041.091-.157.306-.09.36.07.06.355.353.468.527.113.174.146.983.217 1.042.071.058.189.343.104.506-.041.08-.091.223-.128.324.147-.143.598-.217.624-.322.031-.122.264-.449.41-.503.145-.054.61-.193.618-.292.003-.098-.161-.226-.113-.344.05-.116.146-.528-.04-.537-.187-.008-.437-.5-.437-.748s-.138-.948-.065-1.253c.07-.307.742-.657.742-.733 0-.076.063-.282.139-.287a.522.522 0 00.393-.222c.128-.185.526-.96.754-1.138.227-.181.812-.755.883-.797.07-.042.277-.02.419-.137.14-.117.657-.413.819-.413.161 0 .661.085.76.193.096.104.448.47.62.517.174.045.787.423 1.18.529.39.105.59.75.757.622.166-.128.354-.789.447-.758.095.033.415.14.415.254 0 .116.162.299.362.148.2-.15 1.04-.485 1.33-.512.287-.028.813.026.664-.004-.15-.033.022-.517.197-.443.175.074 1.102-.08 1.298-.275.194-.197.718-.743.84-.68.121.066.414.215.47.103l.03-.03c.114-.058.447.047.441.171-.006.14.148.296.202.198.052-.098.237-.383.41-.298.167.088.549.207.416.144-.133-.068-.157-.537-.052-.578.103-.041.429-.221.468-.33.044-.108.311-.37.423-.418.114-.051.581-.255.833-.29.253-.036.757-.288.813-.216.053.075.332.066.388-.066.05-.131.596-.21.616-.384zm-8.873 29.613c.058-.202.285-.506.292-.306.007.2.32 1.344.272 1.59-.048.245-.13.468-.177.493-.05.026-.108.243-.108.337 0 .097-.041.499-.089.689-.052.188-.404.838-.532.875-.126.035-.563-.136-.588-.352-.022-.216-.206-.958-.149-1.067.058-.112.153-.51.106-.61-.048-.101.091-.686.216-.857.126-.174.696-.588.757-.792zm13.362-2.04c.03-.123.4-.309.716-.19.314.12 1.392.63 1.488.7.094.069-.164.032-.576-.08-.413-.113-1.659-.31-1.628-.43zm2.597-3.642c.174.062.531.403.499.521-.032.119-.07.713-.093.902-.024.19-.081.524-.127.743-.047.22-.375.565-.34.586.03.023.061.08-.029.1-.088.024-.25.171-.398.045-.148-.13-.986-.223-1.095-.393-.106-.172.041-.913.444-1.13.403-.217.966-1.434 1.14-1.374zm-4.451.228l.017.013c.035.08.434.287.566.554l.147.243.135.22c.354.282.742.728.857.993.116.265-.15.773-.312.646-.165-.127-.886-1.942-1.26-2.209a124.2 124.2 0 00-.429-.305c.135.09.262-.22.296-.142zm8.75 1.712c-.051.316-.106.63-.167.94-.316-.196-.704-.412-.794-.367-.13.066-.177-.147-.091-.189.088-.038.168-.283.224-.202.053.08.46.03.545-.013.054-.028.17-.11.283-.169zm-2.974-.612c.209.046.32.577.22.614-.1.038-.202.534-.1.692.1.158.1.263 0 .229-.102-.034-.446-.183-.506-.093s-.18.116-.29-.312c-.11-.428.466-1.171.676-1.13zm1.472.442c-.026-.488.746-.523 1.063-.314-.02.435-.739.54-1.063.314zm-11.274-2.447c.1-.206.276-.284.388-.174.113.11.245.613.194.713-.05.1-.683-.336-.582-.54zm10.661-1.647l.041.007c.114.053.312.464.472.507.158.037.029.576-.172.608-.2.032-.534.296-.57.22-.034-.075-.403-.421-.48-.407-.076.014-.08-.086-.01-.22.071-.137.445-.204.435-.367-.01-.162.213-.392.325-.341zm-1.146-1.336c.27.056.43.241.36.41-.073.17-.355.55-.471.447-.12-.104-.159-.914.111-.857zm-.652-1.632c.12-.148.36.505.26.643-.101.142-.217.148-.254.018-.038-.134-.126-.514-.006-.661zm3.512-3.778c.073.306.148.61.21.92-.056.1-.11.17-.155.192-.265.121-.514.197-.559.165-.04-.029-.327.028-.47.125-.14.095-.415.5-.525.429-.112-.074-.101-.5.007-.5l.056.002c-.041-.095.027-.336.163-.428.175-.12.774-.51.918-.637.07-.063.22-.17.355-.268zm-17.57-14.861c.087 0 .247.18.149.398-.1.22-.97.506-1.182.719-.211.213-.991.651-.897.89.094.242.256.933.188.956-.072.021-.317.08-.497-.032-.183-.112-.587-.515-.513-.628.074-.111.284-1.102.416-1.233.128-.129.483-.358.79-.505.306-.148 1.306-.385 1.329-.42.02-.036.129-.145.217-.145zm-9.98-1.874l.065.012c.196.064.3.563.413.58a.848.848 0 01.383.203c.099.097.402.034.64.16.242.128.16.968-.06.9-.225-.066-.711-.23-.77-.023-.057.212-.306.773-.45.778-.147.003-.34-.333-.482-.352-.143-.022-.32-.283-.19-.412.127-.13.148-.613.017-.505-.13.106-.64.159-.646.087-.003-.072-.091-.44-.213-.501-.123-.06-.049-.524.216-.662.264-.137.644.148.592.022-.05-.124.351-.343.55-.275zm15.002.264c.394-.025.718.395.45.442-.27.047-1.189-.051-1.18-.174.01-.122.338-.243.73-.268zm-7.124.145c-.033-.535.862-.763.871-.098-.362-.048-.542.424-.871.098zm-6.61-.704l.132.002c.45.014 1.637.256 1.54.347-.095.092-.538.415-.93.36-.394-.057-1.411-.483-1.417-.57-.007-.088.356-.152.807-.137z"
          fillOpacity={0.701}
          fill="#FFF8DA"
        />
        <path
          d="M63.402 115.539l.03.003c.115.063.38.383.639.236.258-.148.536.334.69.29.15-.045.768.023.86.076.091.053.258.426.417.426.162 0 .641.108.714.243.076.133.197.535.125.592-.075.055-.04.373.11.444.15.07.61.269.617.378.008.103.246.188.198.273-.045.085-.089.506-.177.544-.086.04-.219.26-.334.153-.113-.11-.517-.144-.446-.047.067.096.096.589.01.754-.085.17-.177.676-.465.47-.29-.208-1.313-.662-1.535-.65-.227.008-.043-.45.6-.716l.095-.764.055-.452a18.51 18.51 0 00-.743-.438c-.166-.088-.583.103-.72.036-.137-.068-.546-.053-.443-.009.1.044.27.378.239.555-.03.176-.22.791-.44.866-.22.075-1.034.33-1.002.393.032.063-.11.405-.293.535-.184.129-.643.727-.77.88-.128.152-.548.535-.544.636.006.098-.1.18.024.238.124.057.245.715.459.83.214.116.747.482.83.426.082-.055.28.14.334.05.052-.088.333.261.379.518.047.257.335.554.375.271.04-.284.346-.719.265-.692-.081.024-.148-.25-.034-.242.116.01.433-.32.5-.693.064-.374.03-1.757.102-1.8.067-.039.41.06.473.168.063.109.45.036.547.189.1.156.694.19.694.381 0 .194.11.704.244.717.13.011.452-.002.462-.104.01-.102.166-.148.277.075.112.224.575.707.568.796-.006.09.026.357.16.478.137.121.306.678.388.623.086-.056.344.258.352.45.01.195.036 1.14.098 1.3.063.16.462.442.45.579-.014.133-.11.427-.27.355-.163-.07-.411.072-.434.002-.024-.07-.146-.25-.261-.203-.114.05-.425-.188-.247-.436s.353-.867.108-.684c-.244.18-.885.047-.847.123.038.072-.088.417-.236.452-.145.036-.217.434-.099.532.123.101.31.444.121.57-.162.107-.541.3-.596.332.068-.038-.17-.281-.442-.197-.276.088-.806.537-.741.621.065.08-.07.541-.248.617-.18.076-.747.411-.866.568-.117.16-.035.892-.107.929-.072.037-.341.108-.314.195.026.09-.295.593-.593.748-.304.154-.674 1.058-.625 1.158.048.1.179.454.145.593-.031.141-.102.716-.305.622-.2-.092-.477-.838-.669-.916-.192-.08-.838-.132-.868-.085-.03.045-.188.147-.363.046-.175-.1-.968-.055-1.113.034-.146.092-.73.855-.872 1.595-.146.737 1.085 1.131 1.144.965.058-.167.396-.514.533-.496.136.015.68.17.626.418-.054.246.031.916.3.933.273.015.623.653.56.974-.064.321.212 1.017.33.933.118-.085.555-.22.671-.171.114.05.322.317.498.178.171-.138.55-.717.66-.753.11-.036.346-.168.416-.075.071.096.374.156.394.042.02-.11.477-.007.63.117.15.127.442.566.489.523.043-.048.4-.016.633.113.236.13.998.56 1.075.764.075.206.769.763 1.168 1.003.395.238.516.97.606 1.027.09.06.58.152.772.213.195.061.625.414.751.414.123 0 .614.06.812.134.198.075.585.425.671.342.085-.084.42.296.53.597l-.002.391.002.246c-.057.21-.11.46-.118.558-.008.099-.354.535-.45.641-.096.107-.245.565-.283.604-.036.036-.237.14-.249.256-.014.12-.204.602-.245.963-.042.36-.212 1.365-.325 1.41-.111.046-.735.33-.819.451-.084.119-.338.518-.338.652 0 .133-.137.588-.305.713-.165.124-.353.88-.446.952a.626.626 0 00-.092.109l-.105.15c-.05.072-.095.13-.117.132-.058 0-.218.101-.359.101-.144 0-.464.125-.39.28.072.152-.06.866-.213.994-.15.123-.82.39-.854.64-.038.25-.657.536-.585.85.073.316-.051.95.044 1.02.096.071.086.594.047.705-.04.11-.395.323-.484.457-.09.13-.044.732.055.778.1.048.178.518.266.615.089.097.268.275.072.315-.195.04-.788.082-.879.015-.09-.067-.39-.18-.398-.181a.774.774 0 01-.075-.131c-.03-.063-.11-.476-.19-.696-.08-.218-.456-.862-.485-1.126-.03-.265-.166-1.324-.188-1.483-.026-.162.069-.562-.018-.584-.088-.02.093-.428.248-.488.156-.062.124-.577.033-.527-.095.05-.326-.615-.337-1.127-.01-.51.447-1.536.374-1.867-.072-.329.117-1.15.099-1.245-.02-.096-.136-.329-.113-.434.027-.106.077-.554-.005-.828-.085-.274-.495-1.108-.687-1.285-.195-.173-.69-.685-.652-.76.037-.074-.18-.503-.44-.645-.262-.144-.314-1.11-.202-1.123.11-.016.17-.232.029-.292-.14-.061-.464-.474-.519-.675-.051-.2.192-1.21.311-1.35.117-.14.218-.838.27-.896.057-.061.038-.439-.031-.594-.073-.153-.21-.598-.262-.52-.052.077-.329.128-.497-.058-.168-.184-.86-.447-.86-.503 0-.055-.09-.267-.199-.341-.11-.075-.381-.43-.495-.483-.112-.05-.636-.113-.71-.24-.08-.128-.578-.569-.971-.654-.397-.083-1.622-.554-1.747-.782-.129-.228-.267-1.29-.399-1.454-.132-.166-.537-.62-.532-.719.003-.098-.154-.018-.1.116.058.135.028.65-.05.603-.08-.05-.505-.211-.58-.455-.042-.132-.196-.312-.328-.467 0-.006.003-.012.003-.02a27.244 27.244 0 01.548-3.108c.216-.924.48-1.831.788-2.72l.044-.13c.094-.266.192-.529.295-.79.035-.096.075-.194.114-.29.1-.255.203-.507.313-.757.005-.015.012-.028.019-.043.221-.509.461-1.008.714-1.5.06-.12.12-.24.182-.358.11-.209.223-.417.339-.622.077-.136.157-.273.235-.408.115-.196.23-.393.35-.587a29.339 29.339 0 01.895-1.355 24.497 24.497 0 011.053-1.404c.121-.155.242-.31.368-.46.137.018.254.059.26.111.015.12.247.08.337-.2.054-.161-.002-.377-.049-.543.12-.137.243-.275.365-.41.213.085.527.208.614.348.125.194.481.67.386.774-.097.103.158.344.26.229.107-.119.223-.53.128-.543-.096-.013-.323-.453-.329-.908-.007-.455.597-1.1.714-1.038zm16.642 13.722c.237-.088 1.056-.067 1.09.043.032.107-.103.283-.027.356.072.07.353.618.714.769.084.035.195.091.314.153v17.964c-.15-.34-.288-.649-.288-.737 0-.17-.103-.907-.23-1.25-.127-.344-.612-1.341-.572-1.698.04-.357.284-1.375.249-1.683-.037-.306-.392-1.16-.476-1.471-.08-.314-.366-1.349-.283-1.644.082-.297-.046-1.318-.157-1.286-.115.032-.496.093-.636.014-.144-.077-.722-.252-.731-.472l-.181-.017-.391-.04c-.104.31-.409.564-.676.565-.267 0-1.082-.02-1.334-.171-.251-.155-1.003-.798-1.125-1.089-.124-.29-.556-1.346-.556-1.843 0-.497.106-1.98.236-2.183.131-.207.58-1.236.983-1.543l.145-.279.225-.434c.09-.622.297-1.19.463-1.262.167-.075.49-.473.625-.45.137.024.573.163.865.031.288-.125 1.514-.256 1.754-.343zm-14.688 5.383c.108 0 .141.1.077.224-.064.123-.466.133-.466.057 0-.077.282-.28.389-.28zm-3.597-1.254c.266 0 1.054.071 1.154.152.103.084.46.3.535.335.073.036.316.335.625.315.309-.02.553.64.368.618-.183-.023-.42.193-.513.118-.091-.076-.553-.165-.598-.278-.049-.11.044-.42-.148-.385a.681.681 0 01-.585-.203c-.13-.151-.752-.3-.884-.23-.133.071-.599.01-.557-.079.042-.089.335-.363.603-.363zm1.99-.134l.043.003c.105.042.286.334.383.325.097-.011.078.184-.087.262-.164.077-.284-.193-.355-.175-.072.019-.132-.045-.132-.142 0-.094.087-.311.19-.27zm18.386-15.662v9.523c-.169-.127-.196-.122-.031.043l.03.034v1.552c-.117.166-.241.42-.342.39-.136-.044-.133-.442-.002-.437.13.005.16-.353.05-.524-.11-.168-.695-.405-.72-.515-.025-.108-.171.023-.084.324.089.3-.516.34-.592.02-.077-.32.012-.901-.145-.802-.156.102-.79.079-.912.273-.124.195-.712.717-.783 1.003-.073.284-.448.898-.56.843-.116-.053-.667.03-.786-.055-.117-.086-.694-.195-.728-.369-.036-.175-.105-.806-.08-1.027.023-.22.37-.803.647-.871.274-.067 1.002.06 1.055-.015.052-.08.095-.36-.024-.46-.12-.1-.297-.643-.45-.635-.155.011-.345-.206-.275-.302.07-.099.437-.344.53-.472.097-.126.632-.205.663-.23.032-.025-.202-.158-.497-.149-.296.008-.946.04-.86-.017.089-.062.27-.319.191-.45-.074-.131.061-.708.208-.722.144-.013.165-.407.096-.424-.07-.016-.323-.352-.275-.572.049-.219.11-1.021.223-1.087.116-.066.533-.014.492.074-.041.091-.157.306-.09.36.07.06.355.353.468.528.113.173.146.981.217 1.041.071.058.189.343.104.506-.041.08-.091.223-.128.325.147-.144.598-.218.624-.323.031-.122.264-.449.409-.503.146-.054.611-.193.619-.292.003-.099-.161-.226-.113-.344.05-.116.146-.528-.04-.537-.187-.008-.437-.5-.437-.748s-.138-.948-.065-1.253c.07-.307.742-.657.742-.733 0-.076.063-.281.139-.287a.523.523 0 00.393-.222c.128-.185.526-.96.754-1.138.088-.068.223-.195.365-.324zm-7.242-6.952c.11.015.412.157.567.123.155-.034.81.062 1.078.064.264.002.476.354.228.41-.25.056-.374.57-.194.495.18-.077.802-.008.874.066.07.077.486.16.646.14.158-.017.079.373-.07.408-.145.034-.562.232-.628.333-.065.102-.428.199-.381.283.045.087-.053.532-.13.603-.078.07-.274.117-.067.163.209.045.26.544.087.55-.175.005-.466.462-.352.908.114.447-.532.92-.458.992.073.074.002.46-.067.417-.067-.044-.143-.045 0 .055.141.106-.229.376-.425.297-.194-.075-.76-.225-.813-.168-.055.057-.138.207.047.33.188.122.414.084.266.21-.15.128-.468.721-.659.86-.193.14-.894.435-.986.51-.09.076-.414.33-.523.388-.113.056-.605-.014-.645.099-.039.112-.333 1.16-.467 1.38-.13.222-.306.471-.386.557-.081.086-.289.276-.346.165-.056-.113-.485-.218-.611-.218-.124 0-.45-.427-.446-.949.003-.521-.583-1.538-.455-1.644.043-.036.064-.093.078-.157l.034-.196c.014-.063.034-.117.077-.149.124-.096.275-.41.057-.483-.219-.074-.336-.583-.159-.57.178.018.2-.275.121-.19-.08.084-.522-.16-.505-.292.018-.132.004-.591-.072-.723-.073-.13-.256-.733-.496-.76-.241-.029-.776-.195-.826-.114-.05.079-.543.01-.733-.052-.191-.065-.245-.526-.01-.541.233-.017.735-.113.614-.16-.12-.044-.567-.081-.7-.157-.136-.077-.281.071-.33-.008-.048-.081-.295-.163-.177-.285.123-.123.636-.154.853-.228.215-.074.571-.394.437-.404-.134-.01.18-.576.581-.796.401-.22 1.936-.547 2.225-.551.287-.003 1.202 0 1.174-.14-.027-.137.114-.524.315-.577.197-.056 1.113-.094 1.488-.077.373.019 1.16-.234 1.27-.217zm1.193 7.765l.029.012c.087.098.548.253.698.26.15.01.765-.007.847.134.08.142-.063.798-.192.812-.132.013-.502.204-.688.235-.186.03-.382-.07-.436-.222-.054-.155-.527-.226-.464-.328.062-.101.125-.396.067-.348-.058.051-.267-.04-.127-.1.14-.063.208-.54.295-.443zm-7.276-7.137c.077.009-.03.253-.238.341-.209.091-.758.423-.725.494.034.073-.19.428-.341.474-.153.045-.55.428-.732.538-.18.109-.942.348-1.076.51-.135.162-.346.856-.47.856-.049 0-.112-.003-.163-.008.062.082.06.31.03.388-.036.092-.591.185-.925.242a14.32 14.32 0 01-1.063.12 32.117 32.117 0 01.893-.802c.227-.196.46-.391.694-.58.102-.083.208-.164.312-.246.198-.154.394-.309.596-.458.295-.22.596-.435.9-.64.01-.009.02-.016.03-.023 1.065-.605 2.228-1.213 2.278-1.206zm12.844 1.024l.065.012c.196.064.3.563.414.58l.002.002v1.701c-.09.17-.187.312-.26.315-.147.003-.34-.333-.482-.352-.143-.022-.32-.283-.19-.412.127-.13.148-.613.017-.505-.13.106-.64.159-.646.087-.003-.072-.091-.44-.213-.501-.123-.06-.049-.524.216-.662.264-.137.644.148.592.022-.05-.124.351-.343.55-.275z"
          fill="#B1DDCA"
        />
        <path
          d="M76.899 123.934c.153-.026.274-.15.268-.279-.006-.125-.227-.706-.314-.706s-.253.425-.358.383c-.102-.042-.16.347-.134.493.022.148.384.137.538.11m-14.285-4.286c-.097.091-.013.541.172.553.183.015.479-.679.704-.542.225.141.377.195.341.122-.04-.073-.68-.356-.758-.405-.082-.05-.361.185-.46.272"
          fill="#AFD7A6"
        />
        <path
          d="M65.096 114.537c-.028-.026-.143.057-.09.109.022.034.135-.05.09-.109m3.086 9.192c-.023-.034-.142.055-.097.11.028.032.147-.055.097-.11"
          fill="#ADE2DC"
        />
        <path
          fill="#FCCE01"
          d="M50.929 155.094l-.425 2.564-2.56.419 2.56.423.425 2.56.417-2.56 2.561-.423-2.56-.42z"
        />
        <path
          fill="#FEDD48"
          d="M42.396 114.134l-.425 2.564-2.561.419 2.56.423.426 2.56.417-2.56 2.56-.423-2.56-.42z"
        />
        <path
          d="M220.868 195.56a1.61 1.61 0 01-1.5 1.713l-92.879 6.112a1.611 1.611 0 01-1.71-1.503l-4.3-65.307a1.61 1.61 0 011.502-1.71l92.877-6.114a1.61 1.61 0 011.712 1.5l4.298 65.31z"
          fill="#38B2A6"
        />
        <path fill="#E2F4F2" d="M218.35 194.919l-91.16 6-.406-6.155 91.161-6z" />
        <path
          d="M172.617 195.837l-3.944-59.942a.398.398 0 00.038-.181c-.01-.167-.036-.328-.058-.491a5.799 5.799 0 015.409-5.668l39.814-2.62 4.108 62.402-39.816 2.62a6.551 6.551 0 00-5.551 3.88"
          fill="#FFF"
        />
        <path
          d="M172.65 195.835l-3.945-59.943a.369.369 0 01-.062-.173c-.012-.168-.01-.331-.009-.495-.444-2.941-3.084-5.11-6.103-4.91l-39.817 2.62 4.107 62.403 39.817-2.618a6.55 6.55 0 016.012 3.116"
          fill="#FFF"
        />
        <path
          d="M168.634 135.224a5.802 5.802 0 00-3.534-4.488l4.103 62.332a6.602 6.602 0 013.447 2.767l-3.945-59.943a.369.369 0 01-.062-.173c-.012-.168-.01-.331-.009-.495"
          fill="#E2F4F2"
        />
        <path
          fillOpacity={0.397}
          fill="#38B2A6"
          d="M149.76 140.696l-20.675 1.36-.118-1.806 20.674-1.36zm13.405 4.537l-33.724 2.22-.09-1.355 33.725-2.22zm.262 3.975l-33.725 2.22-.09-1.355 33.726-2.22zm.26 3.974l-33.724 2.22-.09-1.356 33.725-2.22zm.263 3.976l-33.725 2.22-.09-1.356 33.726-2.22zm.262 3.973l-33.725 2.22-.09-1.355 33.725-2.22zm.262 3.976l-33.726 2.22-.089-1.358 33.725-2.219zm.26 3.976l-33.724 2.22-.09-1.358 33.726-2.22zm.263 3.973l-33.725 2.22-.09-1.356 33.725-2.22zm.261 3.974l-33.725 2.22-.09-1.356 33.725-2.217zm.26 3.976l-33.723 2.22-.09-1.354 33.725-2.221zm.263 3.972l-33.725 2.22-.09-1.353 33.726-2.22z"
        />
        <path
          fillOpacity={0.403}
          fill="#38B2A6"
          d="M208.735 142.234l-33.727 2.218-.09-1.353 33.726-2.22zm.261 3.975l-33.726 2.22-.088-1.355 33.724-2.22zm.262 3.974l-33.726 2.22-.09-1.356 33.726-2.22zm.26 3.975l-33.725 2.219-.09-1.356 33.727-2.217zm.264 3.973l-33.728 2.221-.089-1.355 33.728-2.22zm.261 3.978l-33.727 2.217-.09-1.356 33.727-2.219zm.26 3.974l-33.725 2.219-.09-1.356 33.726-2.218zm.263 3.974l-33.727 2.222-.089-1.356 33.726-2.22zm.26 3.975L177.1 176.25l-.089-1.354 33.725-2.22zm.262 3.975l-33.725 2.22-.09-1.355 33.728-2.219zm.263 3.972l-33.727 2.22-.09-1.351 33.726-2.222z"
        />
        <path
          fill="#F9A600"
          d="M167.898 204.52l-4.133-1.97-3.84 2.494-4.909-74.576 3.986-.262 3.988-.262z"
        />
        <g>
          <path
            d="M208.061 105.542c-4.084-.547-8.167-1.093-12.255-1.636-5.261-.605-9.902 1.808-10.354 5.347L184 120.128c-.45 3.52.93 6.422 7.825 10.891 4.11 2.658 8.103 4.763 12.016 6.168l4.22-31.645z"
            fill="#63656A"
          />
          <path
            d="M208.037 105.536c4.082.544 8.165 1.091 12.254 1.635 5.235.794 9.082 4.34 8.589 7.874l-1.45 10.873c-.488 3.517-2.579 5.957-10.404 8.458-4.662 1.494-9.067 2.477-13.212 2.807l4.223-31.647z"
            fill="#4C4C4C"
          />
          <g transform="translate(166.556 103.48)">
            <mask id="pic-education_agents_svg__g" fill="#fff">
              <use xlinkHref="#pic-education_agents_svg__f" />
            </mask>
            <path
              fill="#4C4C4C"
              mask="url(#pic-education_agents_svg__g)"
              d="M38.695 23.022L0 1.839.433.129l81.38 10.94-.222 1.651z"
            />
          </g>
          <g transform="translate(166.556 92.819)">
            <mask id="pic-education_agents_svg__i" fill="#fff">
              <use xlinkHref="#pic-education_agents_svg__h" />
            </mask>
            <path
              fill="#63656A"
              mask="url(#pic-education_agents_svg__i)"
              d="M38.915 32.034L.22 10.85 43.114.543l38.7 21.186z"
            />
          </g>
          <path
            d="M230.817 129.433a.771.771 0 01-.548-.841l1.267-9.505-24.186-13.244a.772.772 0 11.74-1.354l24.653 13.496c.28.156.437.465.395.78l-1.336 10.03a.773.773 0 01-.985.638"
            fill="#FEDD48"
          />
          <path
            d="M231.474 119.533a.781.781 0 01-.145-.06l-23.057-12.623a.72.72 0 11.693-1.267l23.058 12.623a.72.72 0 01.288.98.721.721 0 01-.837.347"
            fill="#F4C806"
          />
          <path
            d="M213.304 106.255c-.22 1.656-2.372 2.736-4.804 2.412-2.432-.321-4.223-1.93-4.002-3.588.22-1.654 2.37-2.735 4.803-2.411 2.43.324 4.223 1.933 4.003 3.587"
            fill="#4C4C4C"
          />
          <path
            d="M212.621 105.545c-.167 1.25-2.303 1.993-4.77 1.666-2.468-.33-4.332-1.61-4.166-2.86.168-1.247 2.3-1.995 4.77-1.664 2.465.329 4.336 1.606 4.166 2.858"
            fill="#63656A"
          />
          <path
            d="M233.723 126.736a2.427 2.427 0 11-4.81-.647 2.427 2.427 0 014.81.647"
            fill="#F4DA80"
          />
          <path
            d="M232.003 131.318a1.327 1.327 0 01-2.631-.352l.625-4.688a1.323 1.323 0 011.49-1.137c.728.094 1.237.76 1.14 1.49l-.624 4.687z"
            fill="#FEDD48"
          />
          <path
            d="M233.02 132.377c-.02-1.342-.875-2.556-2.105-2.72-.011 0-.022.003-.03 0-.012-.001-.017-.005-.028-.008-1.23-.163-2.37.782-2.74 2.074-1.32 5.423-1.826 7.432-2.972 8.207-.516 1.225 1.181 2.942 3.897 3.319l.04.004c.008.002.014.004.023.003 2.717.35 4.808-.865 4.631-2.18-.901-1.051-.869-3.12-.715-8.699z"
            fill="#FEDD48"
          />
          <path
            d="M229.494 132.93c.25-.884.844-1.58 1.562-1.985l.266-1.981c-.659-.58-1.06-1.43-.934-2.37a2.722 2.722 0 012.105-2.292 2.47 2.47 0 00-.856-.294 2.428 2.428 0 00-2.726 2.085c-.11.834.244 1.589.831 2.108l-.236 1.76c-.64.36-1.167.979-1.391 1.762-1.318 5.423-1.824 7.432-2.972 8.207-.29.688.138 1.527 1.04 2.203 1.265-.89 1.84-3.156 3.31-9.203"
            fill="#F4C806"
          />
        </g>
        <g transform="rotate(-54 72.807 -64.515)">
          <path
            d="M19.117 66.95c3.781-4.87 5.716-10.277 5.805-16.218.133-8.912-2.25-16.099-5.323-16.053-3.073.046-5.672 7.307-5.805 16.219-.089 5.94 1.685 11.292 5.323 16.053z"
            fill="#F9A600"
          />
          <path
            d="M19.117 62.986c2.486-3.797 3.729-7.913 3.729-12.348 0-6.654-1.427-11.746-3.73-11.746-2.3 0-3.728 5.092-3.728 11.746 0 4.435 1.243 8.551 3.729 12.348z"
            fill="#FCCE01"
          />
          <path
            d="M0 31.212c4.939 6.094 9.22 10.816 12.84 14.166L9.16 19.994C7.992 26.19 4.939 29.93 0 31.212zM39.01 31.212c-4.94 6.094-9.22 10.816-12.841 14.166l3.68-25.384c1.168 6.196 4.221 9.935 9.16 11.218z"
            fill="#E16B5E"
          />
          <path
            d="M19.525 10.99c4.705 1.944 10.467 7.076 10.467 17.097 0 5.175-1.05 10.566-2.965 14.569H12.022c-1.915-4.003-2.965-9.394-2.965-14.57 0-10.02 5.796-15.147 10.468-17.095z"
            fill="#C8C9CB"
          />
          <path
            d="M19.505 0c.501.402 11.217 3.67 11.757 26.858.131 5.655-.075 9.73-.566 12.659H8.54c-.518-2.93-.791-7.004-.791-12.66C7.749 7.15 15.9 1.818 18.637.427l.184-.092c.233-.114.415-.196.535-.253l.078-.038A.463.463 0 0019.505 0z"
            fill="#E7E7E7"
          />
          <path
            d="M19.505 0c.05.04.202.11.437.224l.232.116c1.172.598 3.658 2.08 5.981 5.678H12.641c2.258-3.433 4.718-4.943 5.996-5.592l.184-.092c.233-.114.415-.196.535-.253l.078-.038A.463.463 0 0019.505 0z"
            fill="#E16B5E"
          />
          <circle fill="#445A98" cx={19.525} cy={18.842} r={7.589} />
          <circle fill="#52CCC0" cx={19.525} cy={18.842} r={5.234} />
          <path
            d="M19.613 30.54c-.387 1.586-1.521 2.8-3.402 3.642l3.402 14.938 3.402-14.938c-1.959-.842-3.093-2.056-3.402-3.642z"
            fill="#E16B5E"
          />
        </g>
        <path
          d="M150.45 58.668c23.359 28.581 8.743 56.87-9.766 70.171-31.292 22.49-90.72 14.57-94.714 6.316-1.313-2.71.888-4.493 6.6-5.345"
          stroke="#63656A"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
});
SvgPicEducationagents.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.any,
};
SvgPicEducationagents.defaultProps = {
  className: undefined,
  color: undefined,
  fontSize: 16,
};
export default SvgPicEducationagents;
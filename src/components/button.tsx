import './button.styles.css'

type ButtonProps = {
    url: string
}

export default function Button(props: ButtonProps) {

    return <button>
        {props.url}
    </button>
} 